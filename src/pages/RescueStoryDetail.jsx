import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { rescueStoryData } from "../data/rescueStoryData";
import { getTimeAgo } from "../utils/getTimeAgo";

function RescueStoryDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const story = rescueStoryData.find(
    (item) => item.communityPostId === Number(id),
  );

  if (!story) {
    return (
      <main className="rescue-story-page">
        <div className="rescue-story-inner">
          <p>구조스토리를 찾을 수 없습니다.</p>
          <Link to="/community">커뮤니티로 돌아가기</Link>
        </div>
      </main>
    );
  }

  const images = story.images?.length > 0 ? story.images : [story.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <main className="rescue-story-page">
      <article className="rescue-story-inner">
        <Link
          to={`/community/${story.communityPostId}`}
          className="rescue-story-back"
        >
          게시글로 돌아가기
        </Link>

        <span className="rescue-story-category">{story.category}</span>
        <h1>{story.title}</h1>

        <div className="rescue-story-author">
          <img src={story.author.profileImage} alt="" />
          <strong>{story.author.nickname}</strong>
          <span>
            {getTimeAgo(story.createdAt || story.timeText, story.timeText)}
          </span>
        </div>

        <div className="rescue-story-gallery">
          <img src={images[currentImageIndex]} alt={story.title} />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-button gallery-prev"
                onClick={handlePrevImage}
                aria-label="이전 이미지"
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-button gallery-next"
                onClick={handleNextImage}
                aria-label="다음 이미지"
              >
                ›
              </button>
              <span className="gallery-count">
                {currentImageIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        <div className="rescue-story-body">
          {story.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

export default RescueStoryDetail;
