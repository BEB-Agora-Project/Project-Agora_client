import styled from "@emotion/styled";
import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import LoadingButton from "../../components/common/LoadingButton";
import Layout from "../../components/Layout";
import { useDispatch } from "../../store";
import { userActions } from "../../store/userSlice";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .button {
    height: 4rem;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  .loading-button {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSubmitButton = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(userActions.setLoggedIn());
      navigate(-1);
      setLoading(false);
    }, 2000);
  };

  const onClickFindPasswordButton = () => {};

  const onClickSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <Layout>
      <Base>
        <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
          <Typography variant="h4" fontWeight={600}>
            로그인
          </Typography>
        </Box>
        <Typography variant="h6">이메일</Typography>
        <Input type="text" value={email} onChange={onChangeEmail} />
        <Typography variant="h6">비밀번호</Typography>
        <Input type="password" value={password} onChange={onChangePassword} />
        {!loading && (
          <Button
            className="button"
            variant="contained"
            onClick={onClickSubmitButton}
          >
            로그인
          </Button>
        )}
        {loading && (
          <LoadingButton className="loading-button" ringSize="large" />
        )}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer" }}
            onClick={onClickFindPasswordButton}
          >
            비밀번호 찾기
          </Typography>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer" }}
            onClick={onClickSignUpButton}
          >
            회원가입
          </Typography>
        </Box>
      </Base>
    </Layout>
  );
};

export default Login;
