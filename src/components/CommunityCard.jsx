import { useNavigate } from "react-router-dom";

function StatIcon({ type, filled = false }) {
  if (type === "heart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
          fill={filled ? "currentColor" : "none"}
        />
      </svg>
    );
  }

  if (type === "share") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 16V3m0 0L7.5 7.5M12 3l4.5 4.5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function CommunityCard({ item, onLike, onView }) {
  const navigate = useNavigate();
  const previewContent =
    item.content ||
    item.detailSections?.find((section) => section.title === "성격 소개")
      ?.content ||
    item.detailSections?.[0]?.content;

  const openPost = () => {
    onView(item.id);
    window.scrollTo(0, 0);
    navigate(`/community/${item.id}`);
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPost();
    }
  };

  return (
    <article
      className="community-card"
      role="link"
      tabIndex="0"
      onClick={openPost}
      onKeyDown={handleKeyDown}
    >
      
      <span className="community-card-category">
        {item.subCategory}
      </span>

      
      <div className="community-author-row">
        <div className="community-author">
          <div className="community-author-image">
            {item.author.profileImage ? (
              <img
                src={
                    item.author.profileImage ||
                    "/images/community/default-profile.jpg"
                }
                alt={`${item.author.nickname} 프로필`}
                onError={(event) => {
                  event.currentTarget.src = "/images/community/default-profile.jpg";
                }}
                />
            ) : (
              <span className="community-author-default">👤</span>
            )}
          </div>

          <div className="community-author-text">
            <strong>{item.author.nickname}</strong>
            <p>{item.author.introduction}</p>
          </div>
        </div>

        
        <span className="community-card-time">
          {item.timeText}
        </span>
      </div>

      
      <h2>{item.title}</h2>

      
      {previewContent && (
        <p className="community-card-description">
          {previewContent}
        </p>
      )}

     
      {item.images?.length > 0 && (
        <div className="community-card-images">
          {item.images.slice(0, 4).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${item.title} 이미지 ${index + 1}`}
            />
          ))}
        </div>
      )}

     <div className="community-card-bottom">
        <div className="community-card-stats">
          <button
            type="button"
            className={`community-like-button${item.liked ? " liked" : ""}`}
            aria-label={item.liked ? "좋아요 취소" : "좋아요"}
            aria-pressed={Boolean(item.liked)}
            onClick={(event) => {
              event.stopPropagation();
              onLike(item.id);
            }}
          >
            <StatIcon type="heart" filled={item.liked} />
            <span>{item.likes}</span>
          </button>
          <span className="community-stat-item">
            <StatIcon type="share" />
            <span>{item.shares}</span>
          </span>
          <span className="community-stat-item">
            <StatIcon type="view" />
            <span>{item.views}</span>
          </span>
        </div>

        <span className="community-card-comments">
          ♡ {item.comments}
        </span>
      </div>
    </article>
  );
}

export default CommunityCard;
