const API_URL = {
  LOGIN: "/login",
  NEWS: {
    GET: "news",
    GETID: (id: any) => `news/${id}`,
    GET_SLUG: (slug: any) => `news/slug/${slug}`,
    GET_NEAR: (id: any) => `news/near-by/${id}`,
  },
  CREATE_CLUB: "/user/request/create",
  LIST_SPORT: "/user/sport-discipline/list",
  LIST_OTHER_CLUBS: "/user/club/list-other",
  JOIN_CLUB: "/user/club/request-join",
  CANCEL_JOIN_CLUB: "/user/club/cancel-request-join",
  CLUBS: {
    DETAIL: "/user/club/detail",
    CHECK_IS_IN_CLUB: "/user/club/check",
    CLUBS_OTHER: "/user/club/list-other",
    LIST_REQUESTS: "/user/club/list-member-request",
    REVIEW_REQUEST: "/user/club/review-request-join",
    KICK_MEMBER: "/user/club/kick-member",
  },
  MATCHS: {
    CREATE: "/user/match/create",
    LIST_PK: "/user/match/list-pk",
    LIST_MATCHS: "/user/match/list-match",
    IN_DUE_MATCH: "/user/match/in-due",
    REPLY_PK: (id: any) => `/user/match/reply-pk/${id}`,

    LIST_ALL_MATCH: "/user/match/list-all-match",
    DETAIL_MATCH: (id: any) => `/user/match/detail/${id}`,

    CONFIRM_MATCH: "/user/match/update-result",
    REPLY_CONFIRM_MATCH: "/user/match/update-result",
  },
  USER_INFO: "/user/user-info",
};

export default API_URL;
