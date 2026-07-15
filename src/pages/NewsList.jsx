import { useState } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/news";

function NewsList() {
  const [activeTab, setActiveTab] = useState("전체");

  const tabs = ["전체", "입양가이드", "앱이용안내", "소식"];

  const filteredNews =
    activeTab === "전체"
      ? newsData
      : newsData.filter((item) => item.category === activeTab);

  return (
    <main className="news-list-page">
      <div className="news-tabs">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="news-list">
        {filteredNews.map((item) => (
          <Link
            to={`/news/${item.id}`}
            className="news-list-card"
            key={item.id}
          >
            <div className="news-list-info">
              <span>{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.content.filter(Boolean).join(" ")}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default NewsList;
