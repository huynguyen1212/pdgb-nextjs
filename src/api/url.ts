const API_URL = {
  LOGIN: "/login",
  NEWS: {
    GET: "news",
    GETID: (id: any) => `news/${id}`,
    GET_SLUG: (slug: any) => `news/slug/${slug}`,
    GET_NEAR: (id: any) => `news/near-by/${id}`,
  },
  CREATE_CLUB: "/api/user/request/create",
  LIST_SPORT: "/api/user/sport-discipline/list"
};

export default API_URL;
