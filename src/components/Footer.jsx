import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-logo"
              onClick={() => window.scrollTo(0, 0)}
            >
              PAWINHAND
            </Link>

            <div className="footer-social-links">
              <div className="footer-sns">
              <a href="#" aria-label="인스타그램">
                <img src="/icons/instagram.png" alt="" />
              </a>

              <a href="#" aria-label="네이버">
                <img src="/icons/naver.png" alt="" />
              </a>

              <a href="#" aria-label="카카오톡">
                <img src="/icons/kakao.png" alt="" />
              </a>

              <a href="#" aria-label="유튜브">
                <img src="/icons/youtube.png" alt="" />
              </a>
              </div>

              <div className="footer-store">
              <a href="#" aria-label="구글 플레이">
                <img src="/icons/google.png" alt="" />
              </a>

              <a href="#" aria-label="앱스토어">
                <img src="/icons/apple.png" alt="" />
              </a>
              </div>
            </div>
          </div>

          <div className="footer-menu">
            <div className="footer-menu-column">
              <h3>회사</h3>

              <ul>
                <li>
                  <a href="#">소개</a>
                </li>

                <li>
                  <Link to="/news">공지사항</Link>
                </li>

                <li>
                  <Link to="/donation">후원</Link>
                </li>
              </ul>
            </div>

            <div className="footer-menu-column">
              <h3>서비스</h3>

              <ul>
                <li>
                  <Link to="/">홈</Link>
                </li>

                <li>
                  <a href="#">보호소</a>
                </li>

                <li>
                  <a href="#">실종/제보</a>
                </li>

                <li>
                  <a href="#">스토리</a>
                </li>

                <li>
                  <a href="#">유기동물 통계</a>
                </li>

                <li>
                  <a href="#">혜택</a>
                </li>
              </ul>
            </div>

            <div className="footer-menu-column">
              <h3>협력</h3>

              <ul>
                <li>
                  <a href="#">협력 지자체</a>
                </li>

                <li>
                  <Link to="/campaign">입양 캠페인</Link>
                </li>

                <li>
                  <Link to="/donation">포인기부</Link>
                </li>
              </ul>
            </div>

            <div className="footer-menu-column">
              <h3>문의</h3>

              <ul>
                <li>
                  <a href="#">자주하는 질문</a>
                </li>

                <li>
                  <a href="#">보호소 관리 시스템 도입 문의</a>
                </li>

                <li>
                  <a href="#">협업 문의</a>
                </li>

                <li>
                  <a href="#">후원 문의</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className={`footer-company ${isCompanyOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="footer-company-toggle"
              aria-expanded={isCompanyOpen}
              aria-controls="footer-company-details"
              onClick={() => setIsCompanyOpen((current) => !current)}
            >
              <span>주식회사 포인핸드</span>
              <span className="footer-arrow" aria-hidden="true" />
            </button>

            <div className="footer-company-details" id="footer-company-details">
              <div>
                <p>대표자 이환희 | 사업자번호 322-87-00895</p>
                <p>주소 서울특별시 마포구 대흥로 67</p>
                <p>유기동물 공고 제공/데이터 출처 농림축산식품부</p>

                <a href="tel:0269566242" className="footer-contact">
                  ☎ 02-6956-6242
                </a>

                <a href="mailto:pawinhand@naver.com" className="footer-contact">
                  ✉ pawinhand@naver.com
                </a>
              </div>
            </div>
          </div>

          <p className="footer-copyright">
            ©Pawinhand all right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
