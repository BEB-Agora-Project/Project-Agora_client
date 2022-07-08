import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/common/Button";
import Layout from "../../components/Layout";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  // 600px
  @media screen and (min-width: 37.5rem) {
    margin: 1rem auto;
    width: 37.5rem;
  }
`;

const Login: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePasswordConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const onClickSubmitButton = () => {};

  return (
    <Layout>
      <Base>
        <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
          <Typography variant="h4" fontWeight={600}>
            회원가입
          </Typography>
        </Box>
        <Typography variant="h6" fontWeight={400}>
          닉네임
        </Typography>
        <TextField type="text" value={nickname} onChange={onChangeNickname} />
        <Typography variant="h6">이메일</Typography>
        <TextField type="text" value={email} onChange={onChangeEmail} />
        <Typography variant="h6">비밀번호</Typography>
        <TextField
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <Typography variant="h6">비밀번호 확인</Typography>
        <TextField
          type="password"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        <Button
          className="button"
          variant="contained"
          size="large"
          onClick={onClickSubmitButton}
        >
          가입하기
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
          <Typography variant="body1">© AGORA Corp.</Typography>
        </Box>
      </Base>
    </Layout>
  );
};

export default Login;
