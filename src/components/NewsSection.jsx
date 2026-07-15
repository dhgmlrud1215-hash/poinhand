import { Link } from "react-router-dom";
import { newsData } from "../data/news";

function NewsSection() {
  const featuredNews = newsData
    .filter((item) => item.images?.[0]?.includes("/images/news/news"))
    .slice(0, 2);

  return (
    <section className="news-section home-section">
      <div className="section-title">
        <h2>포인핸드 소식</h2>
        <Link to="/news" className="more-btn">전체보기</Link>
      </div>

      <div className="news-list">
        {featuredNews.map((item) => (
          <Link
            to={`/news/${item.id}`}
            className="news-card"
            key={item.id}
          >
            <div className="news-image">
              <img src={item.images[0]} alt={item.title} />

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

export default NewsSection;
