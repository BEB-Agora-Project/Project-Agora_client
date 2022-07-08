import styled from "@emotion/styled";
import { Divider, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/common/Button";
import Layout from "../../components/Layout";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .button {
    border-radius: 0.5rem;
  }

  .text-wrapper {
    display: flex;
    gap: 1rem;
    height: 1.5rem;
    justify-content: flex-end;
  }

  // 600px
  @media screen and (min-width: 37.5rem) {
    margin: 1rem auto;
    width: 37.5rem;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSubmitButton = () => {};

  return (
    <Layout>
      <Base>
        <Typography variant="h4" fontWeight={600}>
          로그인
        </Typography>
        <Typography variant="h6">이메일</Typography>
        <Input type="text" value={email} onChange={onChangeEmail} />
        <Typography variant="h6">비밀번호</Typography>
        <Input type="password" value={password} onChange={onChangePassword} />
        <div className="text-wrapper">
          <p>비밀번호 찾기</p>
          <Divider orientation="vertical" />
          <p>회원가입</p>
        </div>
        <div className="button-wrapper">
          <Button
            className="button"
            variant="contained"
            size="large"
            onClick={onClickSubmitButton}
          >
            로그인
          </Button>
        </div>
      </Base>
    </Layout>
  );
};

export default Login;
