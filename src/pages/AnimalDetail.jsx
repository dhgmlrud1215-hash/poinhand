import { useState } from "react";
import { useParams } from "react-router-dom";
import animals from "../data/animals";

function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find((item) => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!animal) return <p>동물 정보를 찾을 수 없습니다.</p>;

  const currentImage = animal.images[currentIndex];

  return (
    <main className="animal-detail">
      <section className="animal-gallery">
        <span className="status-badge">보호중</span>

        <button
          type="button"
          className="gallery-arrow prev"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? animal.images.length - 1 : currentIndex - 1
            )
          }
        >
          ‹
        </button>

        <img src={currentImage} alt={animal.name} className="animal-main-img" />

        <button
          type="button"
          className="gallery-arrow next"
          onClick={() =>
            setCurrentIndex(
              currentIndex === animal.images.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          ›
        </button>

        <span className="image-count">
          {currentIndex + 1} / {animal.images.length}
        </span>

        <div className="animal-thumbs">
          {animal.images.map((img, index) => (
            <button
              type="button"
              key={img}
              onClick={() => setCurrentIndex(index)}
              className={currentIndex === index ? "active" : ""}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      </section>


      <section className="animal-info-box">
        <h2>[개] {animal.breed}</h2>

        <p className="animal-summary">
          {animal.gender}(중성화 X) / {animal.color} / {animal.birthYear}(년생) / {animal.weight}
        </p>

        <dl className="animal-detail-list">
          <div>
            <dt>공고번호</dt>
            <dd className="point">{animal.noticeNumber}</dd>
          </div>

          <div>
            <dt>공고기간</dt>
            <dd>{animal.noticePeriod}</dd>
          </div>

          <div>
            <dt>발견장소</dt>
            <dd>{animal.foundPlace}</dd>
          </div>

          <div>
            <dt>특이사항</dt>
            <dd>{animal.specialNote}</dd>
          </div>

          <div>
            <dt>보호센터</dt>
            <dd>{animal.shelterName} (tel : {animal.shelterTel})</dd>
          </div>

          <div>
            <dt>관할기관</dt>
            <dd>{animal.office}</dd>
          </div>
        </dl>

        <p className="detail-note">
          * 전화 문의는 보호소 운영시간 확인 후 이용 바랍니다.
        </p>
      </section>
    </main>
  );
}

export default AnimalDetail;