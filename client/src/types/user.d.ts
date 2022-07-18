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
};

// 마이페이지
type GetMyPageInfoAPIResponseType = {
  userinfo: {
    username: string;
    email: string;
    address: string;
    current_token: number;
    expected_token: number;
    today_vote_count: number;
    created_at: Date;
  };
  myposts: {
    title: string;
    hit: number;
    Comments: [];
  }[];
  myitems: [];
  myboards: [];
};
