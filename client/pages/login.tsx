import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/buttons/Button";
import Divider from "../components/common/Divider";
import Input from "../components/common/inputs/Input";
import Layout from "../components/layouts/Layout";
import palette from "../styles/palette";
import { theme } from "../styles/theme";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .login-heading {
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem 0;
  }

  .login-input-label {
    font-size: 1.25rem;
  }

  .login-input-message {
    font-size: 0.875rem;
    color: ${theme.success};
    margin-bottom: 1rem;
  }

  .login-description-wrapper {
    display: flex;
    justify-content: flex-end;
    color: ${palette.gray[500]};
    gap: 1rem;
  }

  .login-description {
    cursor: pointer;
  }

  .login-submit-button-wrapper {
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

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignUpButton = () => {
    router.push("/signup");
  };

  const onClickSubmitButton = () => {};

  return (
    <Layout>
      <Base>
        <h1 className="login-heading">로그인</h1>
        <Divider />
        <p className="login-input-label">이메일 주소</p>
        <Input
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요"
          validated={true}
          width="100%"
        />
        <p className="login-input-label">비밀번호</p>
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요"
          validated={true}
          width="100%"
        />
        <div className="login-description-wrapper">
          <span className="login-description">비밀번호 찾기</span>
          <span className="login-description" onClick={onClickSignUpButton}>
            회원가입
          </span>
        </div>
        <div className="login-submit-button-wrapper">
          <Button variant="contained" onClick={onClickSubmitButton}>
            로그인
          </Button>
        </div>
      </Base>
    </Layout>
  );
};

export default Login;
