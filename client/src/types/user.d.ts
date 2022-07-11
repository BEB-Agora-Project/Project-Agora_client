// 회원가입 body
type SignUpAPIBodyType = {
  email: string;
  password: string;
  userName: string;
};

// 로그인 body
type LoginAPIBodyType = {
  email: string;
  password: string;
};

// 로그인 response
type LoginAPIResponseType = {
  accessToken: string;
};

// 닉네임 변경 body
type UpdateNameAPIBodyType = {
  userId: number;
  username: string;
};

// 비밀번호 변경 body
type UpdatePasswordAPIBodyType = {
  userId: number;
  password: string;
};

// 비밀번호 찾기 body
type FindpasswordAPIBodyType = {
  username: string;
};

// 인증 response
type AuthenticateAPIResponseType = {
  userId: number;
  username: string;
  email: string;
};
