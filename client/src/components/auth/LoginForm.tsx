import React from "react";
import {
  Box,
  Checkbox,
  TextField,
  Typography,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CTAButton from "../common/CTAButton";
import GoogleLoginButton from "../social-login/GoogleLoginButton";

interface Props {
  email: string;
  password: string;
  errorMessage: string;
  isLoading: boolean;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSubmitButton: () => void;
  onClickSignUpButton: () => void;
  onClickForgotPassword: () => void;
}

const LoginForm: React.FC<Props> = ({
  email,
  password,
  errorMessage,
  isLoading,
  onChangeEmail,
  onChangePassword,
  onClickSubmitButton,
  onClickSignUpButton,
  onClickForgotPassword,
}) => {
  const validated = email !== "" && password !== "";

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
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
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap="0.5rem">
          <Checkbox />
          로그인 유지
        </Box>
        <MuiLink sx={{ cursor: "pointer" }} onClick={onClickForgotPassword}>
          비밀번호를 잊으셨나요?
        </MuiLink>
      </Box>
      <CTAButton
        disabled={!validated}
        onClick={onClickSubmitButton}
        isLoading={isLoading}
      >
        로그인
      </CTAButton>
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
  );
};

export default LoginForm;
