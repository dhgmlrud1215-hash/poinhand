export const cultureData = {
  campaign: {
    name: "입양캠페인",
    type: "campaign",
    items: [
      {
        id: 1,
        title: "[제주] 날개를 달아줄개 ✈️",
        description: "제주도 유기동물 입양 캠페인",
        period: "2023-11-14 ~ 2026-12-31",
        image: "/images/culture/campaign01.png",
        link: "/campaign/1",
      },
      {
        id: 2,
        title: "[유한클로락스] Clean up! Cheer up!",
        description: "유기동물 입양 응원 캠페인",
        period: "2026-01-01 ~ 2026-12-31",
        image: "/images/culture/campaign02.jpeg",
        link: "/campaign/2",
      },
      {
        id: 3,
        title: "[브라벡토] 건강하게 유기동물 입양해요",
        description: "내외부기생충 예방 캠페인",
        period: "2024-03-01 ~ 2026-11-30",
        image: "/images/culture/campaign03.png",
        link: "/campaign/3",
      },
      {
        id: 4,
        title: "[힐스] Shelter To Home",
        description: "보호소에서 입양된 가정까지 영양적으로 건강하도록!",
        period: "2025-02-01 ~ 2026-12-31",
        image: "/images/culture/campaign04.png",
        link: "/campaign/4",
      },
    ],
  },

  donation: {
    name: "포인기부",
    type: "donation",
    items: [
      {
        id: 1,
        title: "유기동물의 영양적인 건강을 위해 보호소에 사료를 기부해요!",
        company: "힐스코리아",
        status: "진행중",
        participation: 756,
        progress: 14,
        image: "/images/culture/donation01.png",
        link: "/donation/1",
      },
      {
        id: 2,
        title: "위생적인 보호소 환경 개선을 위해 기부해요!",
        company: "유한클로락스",
        status: "진행중",
        participation: 1368,
        progress: 38,
        image: "/images/culture/donation02.jpeg",
        link: "/donation/2",
      },
    ],
  },

  volunteer: {
    name: "봉사활동",
    type: "volunteer",
    items: [
      {
        id: 1,
        nickname: "미니둥이",
        createdAt: "2026-07-13T16:20:00",
        from: "대구광역시 북구",
        to: "서울특별시 노원구",
        content:
          "입양가는 아이를 대구에서 서울까지 데려다 주실 천사님을 구해 봐요 🥹 아직 아가라서 차내에서는 문제가 없을 거예요.\n목요일 제외 주중이나 주말, 편하신 시간에 부탁드릴게요.\n쪽지나 댓글 부탁드릴게요! 감사합니다 😭",
        image: "/images/culture/volunteer01.jpg",
        link: "/volunteer/1",
      },

      {
        id: 2,
        nickname: "봄비7",
        createdAt: "2026-07-21T00:00:00",

        from: "충청남도 서천군\n서천군 마산면 한마로 1189-20",

        to: "경기도 용인시\n처인구 중부대로1294",

        content:
          "안락사위기인 초희의 임보자가 나와 하루라도 빨리 데리고 나오려합니다.\n" +
          "5kg밖에 안되는 작은아이 이동봉사 도와주십시오.\n" +
          "캔넬필요. 26.7.19일부터 가능\n" +
          "문의. 카톡 bgs0327",

        image: [
          "/images/culture/volunteer02.jpg",
          "/images/culture/volunteer02-1.jpg",
        ],

        link: "/volunteer/2",
      },

      {
        id: 3,
        author: {
          nickname: "모리보니",
          profileImage: "/images/culture/profile03.jpg",
          introduction: "사지말고 입양하세요.",
        },
        createdAt: "2026-07-22T00:00:00",

        from: "서울특별시 동작구\n다이크동물종합병원",

        to: "충청남도 홍성군\n홍성",

        content:
          "수유임보가 필요한 아이예요.\n" +
          "충남끝까지 이동가능하신 분 계실까요?",

        image: "/images/culture/volunteer03.jpg",

        link: "/volunteer/3",

        animalNotice: {
          image: "/images/culture/volunteer03-notice.jpg",
          status: "공고중",
          gender: "암컷",
          species: "[고양이] 한국 고양이",
          noticeNumber: "서울-동작-2026-00097",
          registeredDate: "2026.07.21",
          foundPlace: "신상도초등학교 정문",
        },

        shelter: {
          name: "다이크동물종합병원",
          region: "서울특별시 동작구",
          image: "/images/community/shelter-default.png",
        },
      },
    ],
  },
};
