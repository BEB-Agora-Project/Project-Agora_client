import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/Checkbox";
import LoadingButton from "../../components/common/LoadingButton";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import PaperLayout from "../../components/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useDispatch } from "../../store";
import { userActions } from "../../store/userSlice";
import { theme } from "../../styles/theme";

const Base = styled.div`
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
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const state = location.state as { from: string };

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const validated = email !== "" && password !== "";

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSubmitButton = () => {
    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 확인해주세요.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      dispatch(userActions.setLoggedIn());
      navigate(state?.from ?? -1, { replace: true });
      setLoading(false);
    }, 2000);
  };

  const onClickSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <Base>
      <PaperLayout width="40rem">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: matches ? 4 : 2,
          }}
        >
          <Typography variant="h5" sx={{ mt: 2 }}>
            로그인
          </Typography>
          <TextField
            type="text"
            variant="standard"
            label="이메일 주소"
            value={email}
            onChange={onChangeEmail}
            autoFocus
            sx={{ my: 2 }}
          />
          <TextField
            type="password"
            variant="standard"
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          {errorMessage && (
            <Typography sx={{ color: theme.error }}>{errorMessage}</Typography>
          )}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Checkbox />
              로그인 유지
            </Box>
            <MuiLink
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/find")}
            >
              비밀번호를 잊으셨나요?
            </MuiLink>
          </Box>
          {!loading && (
            <Button
              className="button"
              variant="contained"
              onClick={onClickSubmitButton}
              disabled={!validated}
            >
              로그인
            </Button>
          )}

          {loading && (
            <LoadingButton className="loading-button" ringSize="large" />
          )}
          <Box display="flex" justifyContent="center" gap="0.5rem" mt="0.5rem">
            <Typography>아고라에 처음이신가요?</Typography>
            <MuiLink sx={{ cursor: "pointer" }} onClick={onClickSignUpButton}>
              회원가입
            </MuiLink>
          </Box>
          <Divider sx={{ color: "divider", mt: 2 }}>OR</Divider>
          <GoogleLoginButton />
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default Login;
