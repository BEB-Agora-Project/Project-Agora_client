// 게시글 작성 body
type SubmitPostAPIBodyType = {
  userId: number;
  postContents: string;
  postTitle: string;
  boardId: number;
};

// 모든 게시글 가져오기 response
type GetAllPostsResponseType = {
  postId: number;
  postTitle: string;
  postContents: string;
  username: string;
  createdAt: string;
  commentCount: number;
  boardTitle: string;
  views: number;
  likes: number;
}[];

// 게시판 별 글 목록 가져오기 body
type GetPostsByBoardBodyType = {
  boardTitle: string;
};

// 게시판 별 글 목록 가져오기 response
type GetPostsByBoardResponseType = {
  postId: number;
  postTitle: string;
  username: string;
  createdAt: string;
  commentCount: number;
  views: number;
  likes: number;
}[];

// 글 상세보기 response
type GetPostByIdResponseType = {
  postId: number;
  postTitle: string;
  postContents: string;
  username: string;
  createdAt: date;
  boardTitle: string;
  views: number;
  likes: number;
  comments: {
    username: string;
    contents: string;
    commentId: number;
    createdAt: string;
  }[];
};

// 글 수정 body (파라미터 postId)
type UpdatePostAPIBodyType = {
  boardTitle: string;
  postTitle: string;
  postContents: string;
};

// 댓글 작성 body
type SubmitCommentAPIBodyType = {
  userId: number;
  postId: number;
  commentContents: string;
};

// 댓글 수정 body (파라미터 commentId)
type UpdateCommentAPIBodyType = {
  commentContents: string;
};
