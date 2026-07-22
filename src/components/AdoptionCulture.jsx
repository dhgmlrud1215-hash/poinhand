import { useState } from "react";
import { Link } from "react-router-dom";
import { cultureData } from "../data/culture";
import { getTimeAgo } from "../utils/getTimeAgo";

function AdoptionCulture() {
  const [activeTab, setActiveTab] = useState("campaign");

  const activeData = cultureData[activeTab];
  const visibleItems = activeData.type === "volunteer"
    ? [...activeData.items]
        .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
        .slice(0, 2)
    : activeData.type === "campaign"
      ? activeData.items.slice(0, 2)
      : activeData.items;

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const moreLink =
    activeTab === "volunteer"
      ? "/community?main=도움이 필요해요&sub=이동 봉사"
      : `/${activeTab}`;

  return (
    <section className="culture-section home-section">
      <div className="section-title">
        <h2>함께 만드는 입양 문화</h2>

        <Link to={moreLink} className="more-btn">
          전체보기
        </Link>
      </div>

      <div className="culture-tabs">
        {Object.entries(cultureData).map(([key, value]) => (
          <button
            type="button"
            key={key}
            className={activeTab === key ? "active" : ""}
            onClick={() => handleTabChange(key)}
          >
            {value.name}
          </button>
        ))}
      </div>

      <div className="culture-list">
        {activeData.type === "campaign" &&
          visibleItems.map((item) => (
            <article
              className="campaign-card"
              key={item.id}
            >
              <img src={item.image} alt={item.title} />

              <div className="campaign-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.period}</span>
              </div>
            </article>
          ))}

        {activeData.type === "donation" &&
          visibleItems.map((item) => (
            <article
              className="donation-card"
              key={item.id}
            >
              <img src={item.image} alt={item.title} />

              <div className="donation-info">
                <div className="donation-top">
                  <span>{item.status}</span>
                  <strong>{item.progress}%</strong>
                </div>

                <h3>{item.title}</h3>
                <p>{item.company}</p>

                <div className="progress-bar">
                  <span style={{ width: `${item.progress}%` }} />
                </div>

                <span className="participation">
                  {item.participation.toLocaleString()}건 참여
                </span>
              </div>
            </article>
          ))}

        {activeData.type === "volunteer" &&
          visibleItems.map((item) => (
            <article
              className="volunteer-card"
              key={item.id}
            >
              <div className="volunteer-top">
                <strong>{item.author?.nickname || item.nickname}</strong>
                <span>{getTimeAgo(item.createdAt)}</span>
              </div>

              <div className="volunteer-route">
                <div>
                  <span>출발</span>
                  <strong>{item.from}</strong>
                </div>

                <span className="route-arrow">→</span>

                <div>
                  <span>도착</span>
                  <strong>{item.to}</strong>
                </div>
              </div>

              <p>{item.content}</p>

              {item.image && (
                <img
                  src={Array.isArray(item.image) ? item.image[0] : item.image}
                  alt="봉사활동 게시글 이미지"
                />
              )}
            </article>
          ))}
      </div>
    </section>
  );
}

export default AdoptionCulture;
