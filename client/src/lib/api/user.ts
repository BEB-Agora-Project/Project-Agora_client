import axios, { auth } from ".";

// 회원가입
export const signUpAPI = (body: SignUpAPIBodyType) =>
  axios.post("/account/signup", body);

// 로그인
export const loginAPI = (body: LoginAPIBodyType) =>
  axios.post<LoginAPIResponseType>("/account/signin", body);

// 닉네임 변경
export const updateNameAPI = (body: UpdateNameAPIBodyType) =>
  axios.patch("/user/nickname", body, auth);

// 비밀번호 변경
export const updatePasswordAPI = (body: UpdatePasswordAPIBodyType) =>
  axios.put("/account/password", body, auth);

// 회원탈퇴
export const withdrawalAPI = () => axios.delete("/user");

// 마이페이지 유저정보
export const getMyPageInfo = () =>
  axios.get<GetMyPageInfoResponseType>("/account/mypage", auth);

/* ------------------------ 인증 관련 API ------------------------ */

// 액세스 토큰으로 유저 정보 가져오기
export const authenticateAPI = (accessToken: string) =>
  axios.get<AuthenticateAPIResponseType>("/user/authenticate", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
