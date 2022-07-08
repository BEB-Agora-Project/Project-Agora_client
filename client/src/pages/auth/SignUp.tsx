import styled from "@emotion/styled";
import { Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickPrevbutton = () => {
    navigate(-1);
  };

  const onClickSubmitButton = () => {};

  return (
    <Layout>
      <Base>
        <Typography variant="h4" fontWeight={600}>
          회원가입
        </Typography>
        <Typography variant="h6" fontWeight={400}>
          닉네임
        </Typography>
        <Input type="text" value={nickname} onChange={onChangeNickname} />
        <Typography variant="h6">이메일</Typography>
        <Input type="text" value={email} onChange={onChangeEmail} />
        <Typography variant="h6">비밀번호</Typography>
        <Input type="password" value={password} onChange={onChangePassword} />
        <div className="button-wrapper">
          <Button
            className="button"
            variant="outlined"
            size="large"
            onClick={onClickPrevbutton}
          >
            돌아가기
          </Button>
          <Button
            className="button"
            variant="contained"
            size="large"
            onClick={onClickSubmitButton}
          >
            가입하기
          </Button>
        </div>
      </Base>
    </Layout>
  );
};

export default Login;
