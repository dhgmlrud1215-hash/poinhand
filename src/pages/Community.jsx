import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { communityData } from "../data/communityData";
import CommunityCard from "../components/CommunityCard";

const COMMUNITY_STATS_KEY = "pawinhand-community-stats";

const COMMUNITY_CATEGORIES = {
  "입양 이야기": ["전체", "입양 후기", "일상 공유", "고민 상담"],
  "도움이 필요해요": [
    "전체",
    "입양 홍보",
    "임보요청",
    "이동 봉사",
    "봉사 모집",
  ],
  "포인핸드 정보": ["전체", "입양 가이드", "앱 이용정보", "소식"],
};

const RELATIVE_TIME_UNITS = {
  분: 60 * 1000,
  시간: 60 * 60 * 1000,
  일: 24 * 60 * 60 * 1000,
};

function getPostTimestamp(post, referenceTime) {
  const createdAt = Date.parse(post.createdAt);
  if (!Number.isNaN(createdAt)) return createdAt;

  const relativeTime = post.timeText?.match(/^(\d+)\s*(분|시간|일)\s*전$/);

  if (relativeTime) {
    const [, amount, unit] = relativeTime;
    return referenceTime - Number(amount) * RELATIVE_TIME_UNITS[unit];
  }

  const displayedDate = Date.parse(post.timeText);
  return Number.isNaN(displayedDate) ? -Infinity : displayedDate;
}

function getInitialPosts() {
  try {
    const savedStats = JSON.parse(localStorage.getItem(COMMUNITY_STATS_KEY)) || {};

    return communityData.map((item) => ({
      ...item,
      ...savedStats[item.id],
    }));
  } catch {
    return communityData;
  }
}

function syncPostsWithCommunityData(currentPosts) {
  const currentPostsById = new Map(
    currentPosts.map((post) => [post.id, post]),
  );

  return communityData.map((item) => {
    const currentPost = currentPostsById.get(item.id);

    if (!currentPost) return item;

    return {
      ...item,
      likes: currentPost.likes,
      views: currentPost.views,
      liked: currentPost.liked,
    };
  });
}

function Community() {
  const [searchParams] = useSearchParams();
  const requestedMainCategory = searchParams.get("main");
  const initialMainCategory = COMMUNITY_CATEGORIES[requestedMainCategory]
    ? requestedMainCategory
    : "입양 이야기";
  const requestedSubCategory = searchParams.get("sub");
  const initialSubCategory = COMMUNITY_CATEGORIES[initialMainCategory].includes(
    requestedSubCategory,
  )
    ? requestedSubCategory
    : "전체";

  const [mainCategory, setMainCategory] = useState(initialMainCategory);
  const [subCategory, setSubCategory] = useState(initialSubCategory);
  const [posts, setPosts] = useState(getInitialPosts);
  const [sortReferenceTime] = useState(() => Date.now());

  const handleMainCategory = (category) => {
    setMainCategory(category);
    setSubCategory("전체");
  };

  const updatePostStats = (id, update) => {
    setPosts((currentPosts) => {
      const syncedPosts = syncPostsWithCommunityData(currentPosts);
      const nextPosts = syncedPosts.map((post) =>
        post.id === id ? update(post) : post,
      );

      const stats = Object.fromEntries(
        nextPosts.map(({ id: postId, likes, views, liked }) => [
          postId,
          { likes, views, liked },
        ]),
      );

      localStorage.setItem(COMMUNITY_STATS_KEY, JSON.stringify(stats));
      return nextPosts;
    });
  };

  const handleLike = (id) => {
    updatePostStats(id, (post) => ({
      ...post,
      liked: !post.liked,
      likes: post.likes + (post.liked ? -1 : 1),
    }));
  };

  const handleView = (id) => {
    updatePostStats(id, (post) => ({
      ...post,
      views: post.views + 1,
    }));
  };

  const availablePosts = syncPostsWithCommunityData(posts);

  const filteredData = availablePosts
    .filter((item) => {
      const mainCategoryMatch = item.mainCategory === mainCategory;

      const subCategoryMatch =
        subCategory === "전체" || item.subCategory === subCategory;

      return mainCategoryMatch && subCategoryMatch;
    })
    .sort((a, b) => {
      const aTimestamp = getPostTimestamp(a, sortReferenceTime);
      const bTimestamp = getPostTimestamp(b, sortReferenceTime);

      return bTimestamp - aTimestamp || b.id - a.id;
    });

  return (
    <main className="community-page">
      <div className="community-inner">
        <h1>커뮤니티</h1>

        <div className="community-main-tabs">
          {Object.keys(COMMUNITY_CATEGORIES).map((category) => (
            <button
              type="button"
              key={category}
              className={mainCategory === category ? "active" : ""}
              onClick={() => handleMainCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="community-sub-tabs">
          {COMMUNITY_CATEGORIES[mainCategory].map((category) => (
            <button
              type="button"
              key={category}
              className={subCategory === category ? "active" : ""}
              onClick={() => setSubCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="community-content">
          <div className="community-list">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <CommunityCard
                  key={item.id}
                  item={item}
                  onLike={handleLike}
                  onView={handleView}
                />
              ))
            ) : (
              <p className="community-empty">
                등록된 게시글이 없습니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Community;
