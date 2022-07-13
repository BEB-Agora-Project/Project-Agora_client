import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/Checkbox";
import LoadingButton from "../../components/common/LoadingButton";
import GoogleLoginButton from "../../components/social-login/GoogleLoginButton";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { loginAPI } from "../../lib/api/user";
import { setCookie } from "../../lib/utils";
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
  const [email, setEmail] = useState("nononcrust@gmail.com");
  const [password, setPassword] = useState("asdqwe123!");
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const validated = email !== "" && password !== "";

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSubmitButton = async () => {
    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 확인해주세요.");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      const body = {
        email: email,
        password: password,
      };

      /*********************** API call **************************/
      try {
        const response = await loginAPI(body);
        console.log(response.data);
        const accessToken = response.data.data.accessToken;
        dispatch(userActions.setIsLoggedIn(true));
        setCookie("accessToken", accessToken);
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
        setErrorMessage("이메일 혹은 비밀번호가 다릅니다.");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  const onClickSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <Base>
      <PaperLayout width="32rem">
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
            autoComplete="이메일"
            variant="standard"
            label="이메일 주소"
            value={email}
            onChange={onChangeEmail}
            autoFocus
            sx={{ my: 2 }}
          />
          <TextField
            type="password"
            autoComplete="비밀번호"
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
          {!isLoading && (
            <Button
              className="button"
              variant="contained"
              onClick={onClickSubmitButton}
              disabled={!validated}
            >
              로그인
            </Button>
          )}

          {isLoading && (
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
          <Typography
            variant="h5"
            sx={{
              alignSelf: "center",
              mt: 8,
              fontWeight: 700,
              color: grey[200],
            }}
          >
            AGORA
          </Typography>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default Login;
