// 토론 게시글 작성 body
type SubmitDiscussPostAPIBodyType = {
  opinion: string;
  title: string;
  content: string;
};

// 토론 게시글 조회 response
type GetDiscussPostsAPIResponseType = {
  id: number;
  title: string;
  content: string;
  hit: number;
  opinion: number;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  board_id: null;
  debate_id: number;
  user_id: number;
  User: {
    username: string;
  };
  Comments: [];
}[];

// 아카이브된 토론 response
type GetArchivedDiscussAPIResponseType = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}[];

// 토론 게시글 수정 body
type UpdateDiscussPostAPIBodyType = {
  opinion: number;
  title: string;
  content: string;
};

// 최근 토론 조회 response
type GetRecentDiscussAPIResponseType = {
  debate: {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
  agreePost: {
    title: string;
    up: number;
  }[];
  neutralPost: {
    title: string;
    up: number;
  }[];
  disagreePost: {
    title: string;
    up: number;
  }[];
};

// 토론 게시글 상세 조회 response
type GetDiscussPostDetailAPIResponseType = {
  id: number;
  title: string;
  content: string;
  hit: number;
  opinion: number;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  board_id: null;
  debate_id: number;
  user_id: number;
  User: {
    username: string;
  };
};

// 토론 댓글 조회 response
type GetDiscussCommentListAPIResponseType = {
  id: number;
  content: string;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  post_id: number;
  user_id: number;
  User: {
    username: string;
  };
}[];

// 토론 댓글 작성 body
type SubmitDiscussCommentAPIBodyType = {
  content: string;
};

// 토론 댓글 수정 body
type UpdateDiscussCommentAPIBodyType = {
  content: string;
};
