// 게시판 목록 가져오기 response
type GetBoardListAPIResponseType = {
  id: number;
  boardname: string;
  createdAt: Date;
  updatedAt: Date;
  user_id: number;
}[];

// 게시판 생성 body
type CreateBoardAPIBodyType = {
  boardname: string;
};

// 게시글 작성 body
type SubmitPostAPIBodyType = {
  title: string;
  content: string;
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

// 게시판 별 글 목록 가져오기 response
type GetPostListByBoardResponseType = {
  data: {
    id: number;
    title: string;
    content: string;
    hit: number;
    opinion: number;
    up: number;
    down: number;
    createdAt: Date;
    updatedAt: Date;
    board_id: number;
    debate_id: null;
    user_id: number;
    User: {
      username: string;
    };
    Comments: [];
  }[];
};

type BoardPostListType = {
  id: number;
  title: string;
  content: string;
  hit: number;
  opinion: number;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  board_id: number;
  debate_id: null;
  user_id: number;
  User: {
    username: string;
  };
  Comments: [];
}[];

// 글 상세보기 response
type GetPostDetailResponseType = {
  data: {
    Board: {
      boardname: string;
      id: number;
    };
    User: {
      id: number;
      username: string;
    };
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
  };
};

type PostDetailType = {
  Board: {
    boardname: string;
    id: number;
  };
  User: {
    id: number;
    username: string;
  };
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
};

// 글 수정 body (파라미터 postId)
type UpdatePostAPIBodyType = {
  title: string;
  content: string;
};

// 댓글 작성 body
type SubmitCommentAPIBodyType = {
  content: string;
  image: null;
};

// 이모티콘 댓글 작성 body
type SubmitImageCommentAPIBodyType = {
  content: null;
  image: string;
};

// 댓글 수정 body (파라미터 commentId)
type UpdateCommentAPIBodyType = {
  content: string;
};

// 댓글 목록 조회 response
type GetCommentListResponseType = {
  id: number;
  content: string | null;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  post_id: number;
  user_id: number;
  image: string | null;
  User: {
    username: string;
    profile_image: string | null;
    badge: string | null;
  };
}[];

// 인기글 목록 조회 response
type GetPopularPostListResponseType = {
  id: number;
  title: string;
  content: string;
  hit: number;
  opinion: number;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  board_id: number;
  debate_id: null;
  user_id: number;
  User: {
    username: string;
  };
  Board: {
    boardname: string;
  };
  Comments: [];
}[];
