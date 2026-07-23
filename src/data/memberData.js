export const agreementData = [
  {
    id: "terms",
    label: "이용약관 동의",
    required: true,
  },
  {
    id: "privacy",
    label: "개인정보 수집 및 이용 동의",
    required: true,
  },
  {
    id: "marketing",
    label: "마케팅 정보 수신 동의",
    required: false,
  },
];

export const myQuickMenus = [
  {
    id: 1,
    title: "멤버십",
    iconKey: "membership",
    path: "/mypage/membership",
  },
  {
    id: 2,
    title: "입양신청",
    iconKey: "adoption",
    path: "/mypage/adoption",
  },
  {
    id: 3,
    title: "쪽지함",
    iconKey: "message",
    path: "/mypage/messages",
  },
];

export const myMenus = [
  {
    id: 1,
    title: "로그인",
    iconKey: "login",
    path: "/login",
  },
  {
    id: 2,
    title: "관심 유기동물",
    iconKey: "pets",
    path: "/mypage/favorites",
  },
];

export const serviceMenus = [
  {
    id: 1,
    title: "공지사항",
    iconKey: "notice",
    path: "/news",
  },
  {
    id: 2,
    title: "자주하는 질문",
    iconKey: "help",
    path: "/faq",
  },
  {
    id: 3,
    title: "문의하기",
    iconKey: "sms",
    path: "/contact",
  },
];

export const snsMenus = [
  {
    id: 1,
    title: "포인핸드 인스타그램",
    icon: "/icons/instagram.png",
    href: "https://www.instagram.com/pawinhand_official/",
  },
  {
    id: 2,
    title: "포인핸드 블로그",
    icon: "/icons/naver.png",
    href: "https://blog.naver.com/pawinhand",
  },
  {
    id: 3,
    title: "포인핸드 유튜브",
    icon: "/icons/youtube.png",
    href: "https://www.youtube.com/@pawinhand",
  },
];
