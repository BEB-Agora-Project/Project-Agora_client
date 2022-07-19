import axios, { formDataConfig } from ".";

/* ------------------------ 인증 관련 API ------------------------ */

// 회원가입
export const signUpAPI = (body: SignUpAPIBodyType) =>
  axios.post("/account/signup", body);

// 로그인
export const loginAPI = (body: LoginAPIBodyType) =>
  axios.post<LoginAPIResponseType>("/account/signin", body);

// 닉네임 변경
export const updateUsernameAPI = (body: UpdateUsernameAPIBodyType) =>
  axios.put("/account/username", body);

// 비밀번호 변경
export const updatePasswordAPI = (body: UpdatePasswordAPIBodyType) =>
  axios.put("/account/password", body);

// 회원탈퇴
export const withdrawalAPI = () => axios.delete("/user");

// 마이페이지 유저정보
export const getMyPageInfoAPI = () =>
  axios.get<GetMyPageInfoAPIResponseType>("/account/mypage");

// 유저정보 조회
export const authenticateAPI = () =>
  axios.get<AuthenticateAPIResponseType>("/account/myinfo");

/* ------------------------ 유저 정보 관련 API ------------------------ */

// 프로필 이미지 업데이트
export const updateProfileImageAPI = (body: FormData) =>
  axios.post(
    "https://webhook.site/0da275e8-6792-457e-a63a-e850eeb2f332",
    body,
    formDataConfig
  );
