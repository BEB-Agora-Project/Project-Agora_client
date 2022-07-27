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

// 게시판 별 글 목록 가져오기 response
type GetPostListByBoardResponseType = {
  count: number;
  boardname: string;
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
    image_url: string;
    User: {
      username: string;
      badge: string;
      profile_image;
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
  image_url: string;
  User: {
    username: string;
    badge: string;
    profile_image: string;
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
      badge: string;
      profile_image: string;
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
    username: string;
    badge: string;
    profile_image: string;
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
  Replies: {
    User: {
      username: string;
      profile_image: string | null;
      badge: string | null;
    };
    id: number;
    content: string;
    created_at: Date;
  }[];
}[];

// 댓글 정보
type CommentDetailType = {
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
  Replies: {
    User: {
      username: string;
      profile_image: string | null;
      badge: string | null;
    };
    id: number;
    content: string;
    created_at: Date;
  }[];
};

// 인기글 목록 조회 response
type GetPopularPostListResponseType = {
  count: number;
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
    image_url: string;
    User: {
      username: string;
    };
    Board: {
      boardname: string;
    };
    Comments: [];
  }[];
};

type PopularPostListType = {
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
  image_url: string;
  User: {
    username: string;
  };
  Board: {
    boardname: string;
  };
  Comments: [];
}[];

// 게시글 이미지 업로드 response
type UploadImageAPIResponseType = {
  imageUrl: string;
};

// 답글 작성 body
type SubmitReplyAPIBodyType = {
  content: string;
};

// 답글 정보
type ReplyDetailType = {
  User: {
    username: string;
    profile_image: string | null;
    badge: string | null;
  };
  id: number;
  content: string;
  created_at: Date;
};

// 답글 수정 body
type UpdateReplyAPIBodyType = {
  content: string;
};

// 모든 게시판의 게시글 목록 조회 response
type GetAllPostListResponseType = {
  count: number;
  data: {
    Board: {
      boardname: string;
    };
    Comments: [];
    User: {
      badge: string;
      profile_image: string;
      username: string;
    };
    board_id: number;
    content: string;
    createdAt: Date;
    down: number;
    image_url: string;
    hit: number;
    id: number;
    opinion: number;
    title: string;
    up: number;
    user_id: number;
  }[];
};

type AllPostListType = {
  Board: {
    boardname: string;
  };
  Comments: [];
  User: {
    badge: string;
    profile_image: string;
    username: string;
  };
  board_id: number;
  content: string;
  createdAt: Date;
  down: number;
  image_url: string;
  hit: number;
  id: number;
  opinion: number;
  title: string;
  up: number;
  user_id: number;
}[];
