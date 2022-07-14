import axios, { auth } from ".";

/* ------------------------ 게시판 관련 API ------------------------ */

// 게시판 목록 조회
export const getBoardListAPI = () =>
  axios.get<GetBoardListAPIResponseType>("/board");

// 게시판 생성
export const createBoardAPI = (body: CreateBoardAPIBodyType) =>
  axios.post("/board", body, auth);

/* ------------------------ 게시글 관련 API ------------------------ */

// 게시글 작성
export const submitPostAPI = (id: number, body: SubmitPostAPIBodyType) =>
  axios.post(`/board/${id}/post`, body, auth);

// 전체 게시글 목록 조회
export const getAllPostsAPI = () =>
  axios.get<GetAllPostsResponseType>("/board");

// 게시판 별 게시글 목록 조회
export const getPostListByBoardAPI = (id: number) =>
  axios.get<GetPostListByBoardResponseType>(`/board/${id}/post`);

// 게시글 상세 내용 조회
export const getPostDetailAPI = (id: number) =>
  axios.get<GetPostDetailResponseType>(`/board/post/${id}`);

// 게시글 수정
export const updatePostAPI = (id: number, body: UpdatePostAPIBodyType) =>
  axios.put(`/board/post/${id}`, body, auth);

// 게시글 삭제
export const deletePostAPI = (id: number) =>
  axios.delete(`/board/post/${id}`, auth);

// 게시글 추천
export const likePostAPI = (id: number) =>
  axios.post(`/board/post/${id}?vote=up`, {}, auth);

// 게시글 비추천
export const dislikePostAPI = (id: number) =>
  axios.post(`/board/post/${id}?vote=down`, {}, auth);

// 인기 게시글 목록 조회
export const getPopularPostListAPI = (id: number) =>
  axios.get<GetPopularPostListResponseType>(`/board/${id}/post/popular`);

/* ------------------------ 댓글 관련 API ------------------------ */

// 댓글 목록 조회
export const getCommentListAPI = (id: number) =>
  axios.get<GetCommentListResponseType>(`/board/post/${id}/comment`);

// 댓글 작성
export const submitCommentAPI = (id: number, body: SubmitCommentAPIBodyType) =>
  axios.post(`/board/post/${id}/comment`, body, auth);

// 댓글 수정
export const updateCommentAPI = (id: number, body: UpdateCommentAPIBodyType) =>
  axios.put(`/board/post/comment/${id}`, body, auth);

// 댓글 삭제
export const deleteCommentAPI = (id: number) =>
  axios.delete(`/board/post/comment/${id}`, auth);
