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
  CANCEL_JOIN_CLUB: "/user/request/delete",
  CLUBS: {
    DETAIL: "/user/club/detail",
    CHECK_IS_IN_CLUB: "/user/club/check",
    CLUBS_OTHER: "/user/club/list-other",
    LIST_REQUESTS: "/user/club/list-member-request"
  },
  MATCHS: {
    CREATE: "/user/match/create",
    LIST_PK: "/user/match/list-pk",
  },
};

export default API_URL;
