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
    "임시보호 요청",
    "이동 봉사",
    "봉사 모집",
  ],
  "포인핸드 정보": ["전체", "입양 가이드", "앱 이용정보", "소식"],
};

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

  const handleMainCategory = (category) => {
    setMainCategory(category);
    setSubCategory("전체");
  };

  const updatePostStats = (id, update) => {
    setPosts((currentPosts) => {
      const nextPosts = currentPosts.map((post) =>
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

  const filteredData = posts.filter((item) => {
    const mainCategoryMatch = item.mainCategory === mainCategory;

    const subCategoryMatch =
      subCategory === "전체" || item.subCategory === subCategory;

    return mainCategoryMatch && subCategoryMatch;
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
