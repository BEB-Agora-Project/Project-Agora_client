import styled from "@emotion/styled";
import {
  Box,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import LoadingButton from "../../components/common/LoadingButton";
import PaperLayout from "../../components/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  EMAIL_REG_EXP,
  PASSWORD_REG_EXP,
  USERNAME_REG_EXP,
} from "../../lib/staticData";
import { theme } from "../../styles/theme";

const Base = styled.div`
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
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

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
    <Base>
      <PaperLayout width="40rem">
        <Stack spacing={2} sx={{ p: matches ? 4 : 2 }}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            회원가입
          </Typography>
          <TextField
            className="text-field"
            type="text"
            variant="standard"
            label="이메일 주소"
            value={email}
            onChange={onChangeEmail}
            error={!emailValid}
            helperText={!emailValid && "올바른 이메일 형식을 입력해주세요."}
            autoFocus
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
          {loading && (
            <LoadingButton className="loading-button" ringSize="large" />
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Typography>이미 회원이신가요?</Typography>
            <MuiLink sx={{ cursor: "pointer" }} onClick={onClickLoginButton}>
              로그인
            </MuiLink>
          </Box>
          <div className="sign-up-description-wrapper">
            <Typography>
              회원가입 후에 이메일이 발송됩니다. 발송된 이메일을 통해 인증을
              완료하셔야 정상적으로 회원가입이 완료됩니다.
            </Typography>
          </div>
        </Stack>
      </PaperLayout>
    </Base>
  );
};

export default Login;
