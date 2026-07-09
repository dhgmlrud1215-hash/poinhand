import { useState } from "react";
import { useParams } from "react-router-dom";
import animals from "../data/animals";
import AdoptionStep from "../components/AdoptionStep";

function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find((item) => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!animal) return <p>동물 정보를 찾을 수 없습니다.</p>;

  const galleryItems = [
    ...(animal.images || []).map((src) => ({ type: "image", src })),
    ...(animal.video ? [{ type: "video", src: animal.video }] : []),
  ];

  const currentItem = galleryItems[currentIndex];

  return (
    <main className="animal-detail">
      <section className="animal-gallery">
        <div className="animal-gallery-main">
          <span className="status-badge">보호중</span>

          <button
            type="button"
            className="gallery-arrow prev"
            aria-label="이전 이미지"
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
              )
            }
          >
            ‹
          </button>

          {currentItem.type === "image" ? (
            <img src={currentItem.src} alt={animal.name} className="animal-main-img" />
          ) : (
            <video controls className="animal-main-img">
              <source src={currentItem.src} type="video/mp4" />
            </video>
          )}

          <button
            type="button"
            className="gallery-arrow next"
            aria-label="다음 이미지"
            onClick={() =>
              setCurrentIndex(
                currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
              )
            }
          >
            ›
          </button>

          <span className="image-count">
            {currentIndex + 1} / {galleryItems.length}
          </span>
        </div>

        <div className="animal-thumbs">
          {galleryItems.map((item, index) => (
            <button
              type="button"
              key={item.src}
              onClick={() => setCurrentIndex(index)}
              className={currentIndex === index ? "active" : ""}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="" />
              ) : (
                <div className="video-thumb">
                  <img src={animal.videoThumb} alt="동영상 썸네일" />
                  <span>▶</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="animal-info-box">
        <h2>
          {animal.petName ? `${animal.petName} · ` : ""}
          [{animal.type === "강아지" ? "개" : animal.type}] {animal.breed}
        </h2>

        <p className="animal-summary">
          {animal.gender}(중성화 X) / {animal.color} / {animal.birthYear}(년생) / {animal.weight}
        </p>

        <dl className="animal-detail-list">
          <div><dt>공고번호</dt><dd className="point">{animal.noticeNumber}</dd></div>
          <div><dt>공고기간</dt><dd>{animal.noticePeriod}</dd></div>
          <div><dt>발견장소</dt><dd>{animal.foundPlace}</dd></div>
          <div><dt>특이사항</dt><dd>{animal.specialNote}</dd></div>
          <div><dt>보호센터</dt><dd>{animal.shelterName} (tel : {animal.shelterTel})</dd></div>
          <div><dt>관할기관</dt><dd>{animal.office}</dd></div>
        </dl>
      </section>

      {animal.personality && animal.tags && animal.personalityText && (
      <section className="detail-section personality-section">
        <h3>
          <span className="section-title-icon" aria-hidden="true">♡</span>
          성향정보
        </h3>

        <div className="personality-grid">
          {[
            { label: "건강상태", value: animal.personality.health },
            { label: "활동성", value: animal.personality.activity },
            { label: "사회성", value: animal.personality.sociability },
            { label: "친화도", value: animal.personality.friendliness },
          ].map((item) => (
            <div className="personality-row" key={item.label}>
              <span>{item.label}</span>
              <div className="level-bar">
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className={n <= item.value ? "active" : ""} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="personality-tags">
          {animal.tags.map((tag) => (
            <span key={tag} className="personality-tag">{tag}</span>
          ))}
        </div>

        <div className="personality-box">
          {animal.personalityText}
        </div>
      </section>
    )}

      {animal.health && (
        <section className="detail-section">
          <h3>건강정보</h3>
          <div className="health-grid">
            <div><strong>파보</strong><span>{animal.health.parvo}</span></div>
            <div><strong>코로나</strong><span>{animal.health.corona}</span></div>
            <div><strong>심장사상충</strong><span>{animal.health.heartworm}</span></div>
            <div><strong>홍역</strong><span>{animal.health.distemper}</span></div>
          </div>
        </section>
      )}

      <AdoptionStep />

      {animal.contactInfo?.length > 0 && (
        <section className="detail-section">
          <h3>📞 입양문의</h3>

          <div className="contact-info">
            {animal.contactInfo.map((contact) => (
              <div className="contact-item" key={contact.tel}>
                <strong>
                  {contact.name} {contact.tel}
                </strong>

                {contact.address && <p>- {contact.address}</p>}
                {contact.time && <p>- {contact.time}</p>}
                {contact.note && <p>- {contact.note}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {animal.adoptionSupport && (
        <section className="detail-section">
          <h3>입양지원</h3>
          <h4>🤲 {animal.adoptionSupport.title}</h4>

          {animal.adoptionSupport.items.map((item) => (
            <div key={item.title} className="support-item">
              <strong>{item.title}</strong>
              <ul>
                {item.content.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

    {animal.extraSupport && (
    <section className="detail-section">
      <h3>🎁 추가지원</h3>

      {animal.extraSupport.map((item) => (
        <div className="extra-support" key={item.title}>
          <img src={item.logo} alt={item.company} />
          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )}
        </main>
      );
    }

export default AnimalDetail;
