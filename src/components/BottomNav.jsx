import { Link, NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      <NavLink
        to="/"
        end
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img className="nav-icon" src="/icons/home.svg" alt="" />
        <span>홈</span>
      </NavLink>

      <NavLink
        to="/shelters"
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img className="nav-icon" src="/icons/shelter.svg" alt="" />
        <span>보호소</span>
      </NavLink>

      <NavLink
        to="/lost"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img className="nav-icon" src="/icons/lost.svg" alt="" />
        <span>실종/제보</span>
      </NavLink>

      <NavLink 
        to="/community"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img className="nav-icon" src="/icons/story.svg" alt="" />
        <span>커뮤니티</span>
      </NavLink>

      <button>
        <img className="nav-icon" src="/icons/my.svg" alt="" />
        <span>마이</span>
      </button>
    </nav>
  );
}

export default BottomNav;
