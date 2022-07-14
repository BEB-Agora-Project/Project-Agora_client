import axios, { auth } from ".";

// 토론 게시글 쓰기
export const submitDiscussPostAPI = (body: SubmitDiscussPostBodyType) =>
  axios.post("/debate/post", body, auth);

export const getRecentDicussPostsAPI = () => axios.get("/debate");

export const getArchivedDiscussPostsAPI = () => axios.get("/debate/archive");

// 토론 게시글 추천
export const likeDiscussPostAPI = (id: number) =>
  axios.post(`/debate/post/${id}?vote=up`);

// 토론 게시글 수정
export const updateDiscussPostAPI = (
  id: number,
  body: UpdateDiscussPostBodyType
) => axios.put(`/debate/post/${id}`, body);

// 의견 별 토론 게시글 가져오기
export const getDiscussPostsByOpinionAPI = (id: number) =>
  axios.get(`/debate/post?opinion=${id}`);
