import axios, { auth } from ".";

// 토론 게시글 쓰기
export const submitDiscussPostAPI = (body: SubmitDiscussPostBodyType) =>
  axios.post("/debate/post", body, auth);

// 진행중인 토론 정보 가져오기
export const getRecentDiscussAPI = () =>
  axios.get<GetRecentDiscussResponseType>("/debate");

// 아카이브된 토론 정보 가져오기
export const getArchivedDiscussAPI = () =>
  axios.get<GetArchivedDiscussPostsResponseType>("/debate/archive");

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
  axios.get<GetDiscussPostsResponseType>(`/debate/post/list?opinion=${id}`);

// 토론 게시글 상세보기
export const getDiscussPostDetailAPI = (id: number) =>
  axios.get<GetDiscussPostDetailResponseType>(`/debate/post/${id}`);
