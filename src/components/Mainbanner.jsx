import { useEffect, useState } from "react";


function Mainbanner() {
  const banners = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
  ];

  const [current, setCurrent] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(1);
  const [isSliding, setIsSliding] = useState(true);
  const displayBanners = [
    banners[banners.length - 1],
    ...banners,
    banners[0],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setDisplayIndex((prev) => prev + 1);
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const handleSlideEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (displayIndex === banners.length + 1) {
      setIsSliding(false);
      setDisplayIndex(1);
    }

    if (displayIndex === 0) {
      setIsSliding(false);
      setDisplayIndex(banners.length);
    }
  };

  const handlePagination = (index) => {
    setIsSliding(true);
    setCurrent(index);
    setDisplayIndex(index + 1);
  };

  const getRealIndex = (index) => {
    if (index === 0) return banners.length - 1;
    if (index === banners.length + 1) return 0;
    return index - 1;
  };

  return (
    <section className="main-banner">
      <div
        className="banner-track"
        style={{
          "--banner-index": displayIndex,
          transition: isSliding ? undefined : "none",
        }}
        onTransitionEnd={handleSlideEnd}
      >
        {displayBanners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            className={getRealIndex(index) === current ? "active" : ""}
            alt={`메인배너 ${index + 1}`}
          />
        ))}
      </div>

      <div className="banner-pagination">
        {banners.map((_, index) => (
          <button 
            key={index}
            type="button"
            className={current === index ? "active" : ""}
            onClick={() => handlePagination(index)}
            aria-label={`메인배너 ${index + 1}번 보기`}
          />
        ))}
      </div>
    </section>
  );
}

export default Mainbanner;
