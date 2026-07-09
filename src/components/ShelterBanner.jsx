import { Link } from "react-router-dom";

function ShelterBanner() {
  return (
    <section className="shelter-mini-banner home-section">
      <Link to="/shelters" className="shelter-mini-link">
        <div className="shelter-mini-left">
          <span className="pin-icon">📍</span>
          <div>
            <strong>내 주변 보호소 찾기</strong>
            <p>가까운 보호소에서 내 맘을 아이들을 만나보세요</p>
          </div>
        </div>

        <span className="shelter-mini-btn">보호소 찾기 ›</span>
      </Link>
    </section>
  );
}

export default ShelterBanner;