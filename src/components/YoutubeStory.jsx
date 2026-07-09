const youtubeList = [
    {
        id: 1,
        title: "제주도 유기견 두마리 입양? 이거 완전 '럭키제이' 잖아",
        image: "/images/youtube/youtube01.png",
        url: "https://youtu.be/1WDbR_3AfPc"
    },

    {
        id: 2,
        title: "특별하지 않지만, 우리 둘이 만나서 특별한 거잖아요. 사람이 무서운 유기견과 따뜻한 보호자님의 만남",
        image: "/images/youtube/youtube02.jpeg",
        url: "https://youtu.be/PZ3M6dYokqY"
    },
]

function Youtubestory() {
  return (
    <section className="youtube-section home-section">
      <div className="section-title">
        <h2>포인핸드 스토리</h2>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          전체보기
        </a>
      </div>

      <div className="youtube-list">
        {youtubeList.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="youtube-card"
            key={item.id}
          >
            <div className="youtube-thumb">
              <img src={item.image} alt={item.title} />
              <span>▶</span>
            </div>

            <strong>{item.title}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Youtubestory;
