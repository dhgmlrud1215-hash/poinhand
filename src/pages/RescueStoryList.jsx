import { Link } from "react-router-dom";
import { rescueStoryData } from "../data/rescueStoryData";
import { getTimeAgo } from "../utils/getTimeAgo";

function RescueStoryList() {
  return (
    <main className="rescue-story-list-page">
      <div className="rescue-story-list-inner">
        <div className="rescue-story-list-heading">
          <span>PAWINHAND STORY</span>
          <h1>구조스토리</h1>
          <p>새로운 가족을 기다리는 아이들의 이야기를 만나보세요.</p>
        </div>

        {rescueStoryData.length > 0 ? (
          <div className="community-list rescue-story-post-list">
            {rescueStoryData.map((story) => (
              <Link
                to={`/community/${story.communityPostId}/rescue-story`}
                className="community-card rescue-story-post"
                key={story.id}
              >
                <span className="community-card-category">
                  {story.category}
                </span>

                <div className="community-author-row">
                  <div className="community-author">
                    <div className="community-author-image">
                      <img
                        src={story.author.profileImage}
                        alt={`${story.author.nickname} 프로필`}
                      />
                    </div>
                    <div className="community-author-text">
                      <strong>{story.author.nickname}</strong>
                      {story.author.introduction && (
                        <p>{story.author.introduction}</p>
                      )}
                    </div>
                  </div>

                  <time className="community-card-time">
                    {getTimeAgo(story.createdAt || story.timeText, story.timeText)}
                  </time>
                </div>

                <h2>{story.title}</h2>
                <p className="community-card-description">
                  {story.description}
                </p>

                {story.image && (
                  <div className="community-card-images">
                    <img src={story.image} alt={`${story.title} 이미지`} />
                  </div>
                )}

                <span className="rescue-story-post-more">
                  구조스토리 보기 ›
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rescue-story-list-empty">
            등록된 구조스토리가 없습니다.
          </p>
        )}
      </div>
    </main>
  );
}

export default RescueStoryList;
