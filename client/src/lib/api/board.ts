import axios, { formDataConfig } from ".";

/* ------------------------ 게시판 관련 API ------------------------ */

// 게시판 목록 조회
export const getBoardListAPI = () =>
  axios.get<GetBoardListAPIResponseType>("/board");

// 게시판 생성
export const createBoardAPI = (body: CreateBoardAPIBodyType) =>
  axios.post("/board", body);

/* ------------------------ 게시글 관련 API ------------------------ */

// 게시글 작성
export const submitPostAPI = (id: number, body: SubmitPostAPIBodyType) =>
  axios.post(`/board/${id}`, body);

// 게시판 별 게시글 목록 조회
export const getPostListByBoardAPI = (id: number, query?: string) =>
  axios.get<GetPostListByBoardResponseType>(`/board/${id}${query}`);

// 게시글 상세 내용 조회
export const getPostDetailAPI = (id: number) =>
  axios.get<GetPostDetailResponseType>(`/board/post/${id}`);

// 게시글 수정
export const updatePostAPI = (id: number, body: UpdatePostAPIBodyType) =>
  axios.put(`/board/post/${id}`, body);

// 게시글 삭제
export const deletePostAPI = (id: number) => axios.delete(`/board/post/${id}`);

// 게시글 추천
export const likePostAPI = (id: number) =>
  axios.post(`/board/post/${id}?vote=up`);

// 게시글 비추천
export const dislikePostAPI = (id: number) =>
  axios.post(`/board/post/${id}?vote=down`);

// 인기 게시글 목록 조회
export const getPopularPostListAPI = (id: number, query?: string) =>
  axios.get<GetPopularPostListResponseType>(`/board/${id}/popular${query}`);

// 게시글 이미지 업로드
export const uploadImageAPI = (body: FormData) =>
  axios.post<UploadImageAPIResponseType>(
    "board/post/image",
    body,
    formDataConfig
  );
/* ------------------------ 댓글 관련 API ------------------------ */

// 댓글 목록 조회
export const getCommentListAPI = (id: number) =>
  axios.get<GetCommentListResponseType>(`/board/post/${id}/comment`);

// 댓글 작성
export const submitCommentAPI = (id: number, body: SubmitCommentAPIBodyType) =>
  axios.post(`/board/post/${id}/comment`, body);

// 이모티콘 댓글 작성
export const submitImageCommentAPI = (
  id: number,
  body: SubmitImageCommentAPIBodyType
) => axios.post(`/board/post/${id}/comment`, body);

// 댓글 수정
export const updateCommentAPI = (id: number, body: UpdateCommentAPIBodyType) =>
  axios.put(`/board/post/comment/${id}`, body);

// 댓글 삭제
export const deleteCommentAPI = (id: number) =>
  axios.delete(`/board/post/comment/${id}`);

/* ------------------------ 답글 관련 API ------------------------ */

// 답글 작성
export const submitReplyAPI = (id: number, body: SubmitReplyAPIBodyType) =>
  axios.post(`board/post/${id}/reply`, body);

// 답글 수정
export const updateReplyAPI = (id: number, body: UpdateReplyAPIBodyType) =>
  axios.put(`board/post/reply/${id}`, body);

// 답글 삭제
export const deleteReplyAPI = (id: number) =>
  axios.delete(`board/post/reply/${id}`);
