import styled from "@emotion/styled";
import { Link as MuiLink, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import LoadingButton from "../../components/common/LoadingButton";
import Layout from "../../components/Layout";
import { theme } from "../../styles/theme";

const Base = styled.div`
  .contents {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: white;
  }

  .button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  .loading-button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  .login-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .text-field {
    margin: 0.5rem 0;
  }

  .sign-up-description-wrapper {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem;
    height: 8rem;
    background-color: ${theme.primaryLight};
  }

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 0 auto;
    width: 37.5rem;

    .contents {
      padding: 2rem;
    }
  }
`;

const USERNAME_REG_EXP = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const PASSWORD_REG_EXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validated =
    usernameValid &&
    emailValid &&
    passwordValid &&
    username !== "" &&
    email !== "" &&
    password !== "";

  const validateEmail = (email: string) => {
    setEmailValid(EMAIL_REG_EXP.test(email) || email === "");
  };

  const validateUsername = (username: string) => {
    setUsernameValid(USERNAME_REG_EXP.test(username) || username === "");
  };

  const validatePassword = (password: string) => {
    setPasswordValid(PASSWORD_REG_EXP.test(password) || password === "");
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    validateUsername(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const onClickLoginButton = () => {
    navigate("/login");
  };

  const onClickSubmitButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <Base>
        <Paper className="contents">
          <Typography variant="h5">회원가입</Typography>
          <TextField
            className="text-field"
            type="text"
            variant="standard"
            label="이메일 주소"
            value={email}
            onChange={onChangeEmail}
            error={!emailValid}
            helperText={!emailValid && "올바른 이메일 형식을 입력해주세요."}
          />
          <TextField
            className="text-field"
            type="text"
            variant="standard"
            label="닉네임"
            value={username}
            onChange={onChangeUsername}
            error={!usernameValid}
            helperText={
              usernameValid
                ? "개인정보를 기입하여 발생될 수 있는 피해는 책임지지 않습니다."
                : "닉네임은 2자 이상이어야 합니다."
            }
          />
          <TextField
            className="text-field"
            type="password"
            variant="standard"
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
            error={!passwordValid}
            helperText={
              !passwordValid &&
              "비밀번호는 8자 이상이고, 특수문자를 포함해야 합니다."
            }
          />
          {!loading && (
            <Button
              className="button"
              variant="contained"
              size="large"
              onClick={onClickSubmitButton}
              disabled={!validated}
            >
              가입하기
            </Button>
          )}
          {loading && <LoadingButton className="loading-button" />}
          <div className="login-text-wrapper">
            <span>이미 회원이신가요?</span>
            <MuiLink sx={{ cursor: "pointer" }} onClick={onClickLoginButton}>
              로그인
            </MuiLink>
          </div>
          <div className="sign-up-description-wrapper">
            <Typography>
              회원가입 후에 이메일이 발송됩니다. 발송된 이메일을 통해 인증을
              완료하셔야 정상적으로 회원가입이 완료됩니다.
            </Typography>
          </div>
        </Paper>
      </Base>
    </Layout>
  );
};

export default Login;
