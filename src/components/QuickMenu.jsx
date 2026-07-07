function QuickMenu() {
  const menus = [
    { image: "/images/quick_intro.png", title: "포인핸드\n소개"},
    {image: "/images/quick_campaign.png", title: "입양\n캠페인"},
    { image: "/images/quick_donation.png", title: "포인기부"},
    { image: "/images/quick_benefit.png", title: "지원/혜택"},
    { image: "/images/quick_store.png", title: "포인핸드\n스토어"},
    { image: "/images/quick_sponsor.png", title: "포인핸드\n후원" },
  ];

  return (
   <section className="quick-menu home-section">
    <h2>퀵메뉴</h2>

    <div className="quick-list">
    {menus.map((menu, index) => (
        <button key={index} className="quick-item">
        <span className="quick-icon">
            <img src={menu.image} alt={menu.title} />
        </span>

        <span className="quick-name">
            {menu.title}
        </span>
        </button>
    ))}
    </div>
   </section>
  );
}

export default QuickMenu;