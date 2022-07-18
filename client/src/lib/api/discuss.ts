import axios from ".";
/* ------------------------ 토론 관련 API ------------------------ */

// 진행중인 토론 정보 조회
export const getRecentDiscussAPI = () =>
  axios.get<GetRecentDiscussAPIResponseType>("/debate");

// 아카이브된 토론 정보 조회
export const getArchivedDiscussAPI = () =>
  axios.get<GetArchivedDiscussAPIResponseType>("/debate/archive");

/* ------------------------ 토론 게시글 관련 API ------------------------ */

// 의견 별 토론 게시글 조회
export const getDiscussPostsByOpinionAPI = (id: number) =>
  axios.get<GetDiscussPostsAPIResponseType>(`/debate/post/list?opinion=${id}`);

// 토론 게시글 상세 조회
export const getDiscussPostDetailAPI = (id: number) =>
  axios.get<GetDiscussPostDetailAPIResponseType>(`/debate/post/${id}`);

// 토론 게시글 작성
export const submitDiscussPostAPI = (body: SubmitDiscussPostAPIBodyType) =>
  axios.post("/debate/post", body);

// 토론 게시글 수정
export const updateDiscussPostAPI = (
  id: number,
  body: UpdateDiscussPostAPIBodyType
) => axios.put(`/debate/post/${id}`, body);

// 토론 게시글 삭제

// 토론 게시글 추천
export const likeDiscussPostAPI = (id: number) =>
  axios.post(`/debate/post/${id}?vote=up`);

// 토론 게시글 비추천
export const dislikeDiscussPostAPI = (id: number) =>
  axios.post(`/debate/post/${id}?vote=down`);

/* ------------------------ 댓글 관련 API ------------------------ */

// 토론 댓글 조회
export const getDiscussCommentListAPI = (id: number) =>
  axios.get(`/debate/post/${id}/comment/list`);

// 토론 댓글 작성
export const submitDiscussCommentAPI = (
  id: number,
  body: SubmitDiscussCommentAPIBodyType
) => axios.post(`/debate/post/${id}/comment`, body);

// 토론 댓글 수정
export const updateDiscussCommentAPI = (
  id: number,
  body: UpdateCommentAPIBodyType
) => axios.put(`/debate/post/comment/${id}`, body);

// 토론 댓글 삭제
export const deleteDiscussCommentAPI = (id: number) =>
  axios.delete(`/debate/post/comment/${id}`);
