import { cultureData } from "../data/culture";
import { getTimeAgo } from "../utils/getTimeAgo";

function CulturePage({ category }) {
  const activeData = cultureData[category] || cultureData.campaign;
  const featuredDonation = activeData.type === "donation" ? activeData.items[0] : null;

  if (activeData.type === "donation") {
    return (
      <main className="culture-page culture-page-donation home-section">
        <section className="donation-hero">
          <img src={featuredDonation.image} alt={featuredDonation.title} />

          <div className="donation-hero-info">
            <h2>{featuredDonation.title}</h2>
            <span>{featuredDonation.company}</span>

            <div className="progress-bar">
              <span style={{ width: `${featuredDonation.progress}%` }} />
            </div>

            <div className="donation-progress-meta">
              <span>{featuredDonation.participation.toLocaleString()}건 참여</span>
              <strong>{featuredDonation.progress}%</strong>
            </div>
          </div>
        </section>

        <div className="donation-status-tabs">
          <button type="button" className="active">진행중</button>
          <button type="button">종료</button>
          <button type="button">전체</button>
        </div>

        <div className="donation-page-list">
          {activeData.items.map((item) => (
            <article className="donation-page-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="donation-page-info">
                <h3>{item.title}</h3>
                <span>{item.company}</span>

                <div className="progress-bar">
                  <span style={{ width: `${item.progress}%` }} />
                </div>

                <div className="donation-progress-meta">
                  <span>{item.participation.toLocaleString()}건 참여</span>
                  <strong>{item.progress}%</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className={`culture-page culture-page-${activeData.type} home-section`}>
      <div className="section-title">
        <h2>{activeData.name}</h2>
      </div>

      <div className="culture-list">
        {activeData.type === "campaign" &&
          activeData.items.map((item) => (
            <article className="campaign-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="campaign-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.period}</span>
              </div>
            </article>
          ))}

        {activeData.type === "donation" &&
          activeData.items.map((item) => (
            <article className="donation-card" key={item.id}>
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
          activeData.items.map((item) => (
            <article className="volunteer-card" key={item.id}>
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
    </main>
  );
}

export default CulturePage;
