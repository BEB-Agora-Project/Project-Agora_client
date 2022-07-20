// 회원가입 body
type SignUpAPIBodyType = {
  email: string;
  password: string;
  username: string;
};

// 로그인 body
type LoginAPIBodyType = {
  email: string;
  password: string;
};

// 로그인 response
type LoginAPIResponseType = {
  data: {
    accessToken: string;
  };
};

// 닉네임 변경 body
type UpdateUsernameAPIBodyType = {
  username: string;
};

// 비밀번호 변경 body
type UpdatePasswordAPIBodyType = {
  password: string;
};

// 비밀번호 찾기 body
type FindpasswordAPIBodyType = {
  username: string;
};

// 인증 response
type AuthenticateAPIResponseType = {
  username: string;
  email: string;
  token: number;
  nft: {
    name: string;
    description: string;
    image: string;
  }[];
};

// 마이페이지
type GetMyPageInfoAPIResponseType = {
  userinfo: {
    address: string;
    created_at: Date;
    current_token: number;
    email: string;
    expected_token: number;
    today_vote_count: number;
    username: string;
  };
  myposts: {
    id: number;
    created_at: Date;
    title: string;
    hit: number;
    up: number;
    Comments: [];
  }[];
  myitems: {
    user_id: number;
    Normalitem: {
      id: number;
      itemname: string;
    };
  }[];
  mynft: {
    attributes: {
      trait_type: string;
      value: string;
    }[];
    createdAt: Date;
    description: string;
    id: number;
    image_uri: string;
    name: string;
    price: number;
    sold: boolean;
    token_id: number;
    token_uri: string;
    updatedAt: Date;
    user_id: number;
  }[];
  myboards: {
    boardname: string;
    createdAt: Date;
    id: number;
    updatedAt: Date;
    user_id: number;
  }[];
};
