import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { communityData } from "../data/communityData";

function CommunityDetail() {

  const { id } = useParams();


  const post = communityData.find(
    (item) => item.id === Number(id)
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  if (!post) {
    return (
      <main className="community-detail-page">
        <div className="community-detail-inner">
          <p>게시글을 찾을 수 없습니다.</p>
          <Link to="/community">커뮤니티로 돌아가기</Link>
        </div>
      </main>
    );
  }

  const images = post.images || [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="community-detail-page">
      <div className="community-detail-inner">

        <div className="community-detail-author">
          <img
            src={
              post.author.profileImage ||
              "/images/community/default-profile.jpg"
            }
            alt={`${post.author.nickname} 프로필`}
            onError={(event) => {
              event.currentTarget.src = "/images/community/default-profile.jpg";
            }}
          />

          <div className="community-detail-author-text">
            <strong>{post.author.nickname}</strong>
            <p>{post.author.introduction}</p>
          </div>

          <span className="community-detail-time">
            {post.timeText}
          </span>
        </div>

        <div className="community-detail-top">

          <section className="community-detail-gallery">
            {images.length > 0 ? (
              <div className="community-detail-main-image">
                <img
                  src={images[currentImageIndex]}
                  alt={`${post.title} 이미지 ${currentImageIndex + 1}`}
                />

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
                  </>
                )}

                <span className="gallery-count">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            ) : (
              <div className="community-detail-no-image">
                등록된 이미지가 없습니다.
              </div>
            )}
          </section>

          <section className="community-detail-content">
            <span className="community-detail-category">
              {post.subCategory}
            </span>

            <h1>{post.title}</h1>

            <p className="community-detail-description">
              {post.content}
            </p>

            {post.appLink && (
              <a
                href={post.appLink}
                target="_blank"
                rel="noreferrer"
                className="community-app-link"
              >
                포인핸드 앱에서 보기
              </a>
            )}
          </section>
        </div>

        {post.animalNotice && (
          <section className="community-notice-section">
            <h2>공고 정보</h2>

            <div className="community-notice-card">
              {post.animalNotice.image && (
                <img
                  src={post.animalNotice.image}
                  alt={post.animalNotice.species}
                  className="community-notice-image"
                  onError={(event) => {
                    event.currentTarget.src = post.images?.[0] || "/images/community/default-profile.jpg";
                  }}
                />
              )}

              <div className="community-notice-content">
                <div className="community-notice-badges">
                  <span className="notice-status">
                    {post.animalNotice.status}
                  </span>

                  <span className="notice-gender">
                    {post.animalNotice.gender}
                  </span>
                </div>

                <dl>
                  <div>
                    <dt>품종</dt>
                    <dd>{post.animalNotice.species}</dd>
                  </div>

                  <div>
                    <dt>공고번호</dt>
                    <dd>{post.animalNotice.noticeNumber}</dd>
                  </div>

                  <div>
                    <dt>등록날짜</dt>
                    <dd>{post.animalNotice.registeredDate}</dd>
                  </div>

                  <div>
                    <dt>구조장소</dt>
                    <dd>{post.animalNotice.foundPlace}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        )}

        {post.shelter && (
          <section className="community-shelter-section">
            <h2>보호소 정보</h2>

            <div className="community-shelter-card">
              <img
                src={
                  post.shelter.image ||
                  "/images/community/shelter-default.png"
                }
                alt=""
              />

              <div>
                <strong>{post.shelter.name}</strong>
                <p>{post.shelter.region}</p>
              </div>
            </div>
          </section>
        )}

        {post.detailSections?.map((section) => (
          <section
            className={`community-detail-section${
              section.title === "기본 정보" ? " community-detail-basic-info" : ""
            }`}
            key={section.title}
          >
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </section>
        ))}

        <div className="community-detail-stats">
          <span>좋아요 {post.likes}</span>
          <span>공유 {post.shares}</span>
          <span>조회 {post.views}</span>
          <span>댓글 {post.comments}</span>
        </div>
      </div>
    </main>
  );
}

export default CommunityDetail;
