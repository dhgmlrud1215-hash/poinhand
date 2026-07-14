import { useState } from "react-router-dom";
import { newsData } from "../data/news";

function NewsDetail() {
  return (
    <section className="news-section home-section">
      <div className="section-title">
        <h2>포인핸드 소식</h2>
        <Link to="/news">더보기</Link>
      </div>

      <div className="news-list">
        {newsData.slice(0, 2).map((item) => (
          <Link
            to={`/news/${item.id}`}
            className="news-card"
            key={item.id}
          >
            <div className="news-image">
              <img src={item.image} alt={item.title} />

              <div className="news-overlay">
                <p>{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NewsDetail;