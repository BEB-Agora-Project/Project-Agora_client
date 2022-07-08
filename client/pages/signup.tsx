import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/buttons/Button";
import Divider from "../components/common/Divider";
import Input from "../components/common/inputs/Input";
import Layout from "../components/layouts/Layout";
import { theme } from "../styles/theme";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .signup-heading {
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem 0;
  }

  .signup-input-label {
    font-size: 1.25rem;
  }

  .signup-input-message {
    font-size: 0.875rem;
    color: ${theme.success};
    margin-bottom: 1rem;
  }

  .signup-input-error-message {
    font-size: 0.875rem;
    color: ${theme.error};
    margin-bottom: 1rem;
  }

  .signup-submit-button-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    margin: 4rem 0;
  }

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 1rem auto;
    width: 37.5rem;
  }
`;

const SignUp: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickPrevButton = () => {};

  const onClickSubmitButton = () => {};

  return (
    <Layout>
      <Base>
        <h1 className="signup-heading">회원가입</h1>
        <Divider />
        <p className="signup-input-label">닉네임</p>

        <Input
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="닉네임을 입력해주세요"
          validated={true}
          width="100%"
        />

        <p className="signup-input-label">이메일 주소</p>

        <Input
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요"
          validated={true}
          width="100%"
        />

        <p className="signup-input-label">비밀번호</p>

        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요"
          validated={true}
          width="100%"
        />

        <div className="signup-submit-button-wrapper">
          <Button variant="outlined" onClick={onClickPrevButton}>
            돌아가기
          </Button>
          <Button variant="contained" onClick={onClickSubmitButton}>
            가입하기
          </Button>
        </div>
      </Base>
    </Layout>
  );
};

export default SignUp;
