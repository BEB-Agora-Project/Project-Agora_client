import React from "react";
import { Box, TextField, Typography, Link as MuiLink } from "@mui/material";
import { grey } from "@mui/material/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CTAButton from "../common/CTAButton";

interface Props {
  email: string;
  emailValid: boolean;
  username: string;
  usernameValid: boolean;
  password: string;
  passwordValid: boolean;
  isLoading: boolean;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickLoginButton: () => void;
  onClickSubmitButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SignUpForm: React.FC<Props> = ({
  email,
  emailValid,
  username,
  usernameValid,
  password,
  passwordValid,
  isLoading,
  onChangeEmail,
  onChangePassword,
  onChangeUsername,
  onClickLoginButton,
  onClickSubmitButton,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const validated =
    usernameValid &&
    emailValid &&
    passwordValid &&
    username !== "" &&
    email !== "" &&
    password !== "";

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        p: matches ? 4 : 2,
      }}
    >
      <Typography variant="h5" sx={{ mt: 2 }}>
        회원가입
      </Typography>
      <TextField
        className="text-field"
        autoComplete="이메일"
        type="text"
        variant="standard"
        label="이메일 주소"
        value={email}
        onChange={onChangeEmail}
        error={!emailValid}
        helperText={!emailValid && "올바른 이메일 형식을 입력해주세요."}
        sx={{ my: 1 }}
      />
      <TextField
        className="text-field"
        autoComplete="닉네임"
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
        sx={{ my: 1 }}
      />
      <TextField
        className="text-field"
        autoComplete="비밀번호"
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
      <CTAButton
        isLoading={isLoading}
        disabled={!validated}
        onClick={onClickSubmitButton}
      >
        가입하기
      </CTAButton>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "8rem",
          bgcolor: theme.primaryLight,
          p: 2,
          mt: 4,
        }}
      >
        <Typography>
          회원가입 후에 이메일이 발송됩니다. 발송된 이메일을 통해 인증을
          완료하셔야 정상적으로 회원가입이 완료됩니다.
        </Typography>
      </Box>
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

export default SignUpForm;
