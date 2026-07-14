import { useState } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../data/news";

function NewsDetail() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = newsData.find(
    (item) => String(item.id) === id
  );

  if (!news) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  const hasImages = news.images?.length > 0;

  return (
    <main className="news-detail-page">
      {hasImages && (
        <div className="news-detail-gallery">
          <img
            src={news.images[currentIndex]}
            alt={news.title}
          />

          {news.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0
                      ? news.images.length - 1
                      : prev - 1
                  )
                }
              >
                이전
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === news.images.length - 1
                      ? 0
                      : prev + 1
                  )
                }
              >
                다음
              </button>

              <span>
                {currentIndex + 1} / {news.images.length}
              </span>
            </>
          )}
        </div>
      )}

      <div className="news-detail-content">
        <span>{news.category}</span>
        <h1>{news.title}</h1>

        {news.content.map((text, index) =>
          text === "" ? (
            <div className="content-space" key={index} />
          ) : (
            <p key={index}>{text}</p>
          )
        )}

        {news.buttonLink && (
          <a href={news.buttonLink}>
            포인핸드 앱에서 보기
          </a>
        )}
      </div>
    </main>
  );
}

export default NewsDetail;