import { Box, TextField, Typography, Link as MuiLink } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CTAButton from "../common/CTAButton";

interface Props {
  email: string;
  emailValid: boolean;
  isLoading: boolean;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickReturnButton: () => void;
  onClickSubmitButton: () => void;
}

const ForgotPassword: React.FC<Props> = ({
  email,
  emailValid,
  isLoading,
  onChangeEmail,
  onClickReturnButton,
  onClickSubmitButton,
}) => {
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
        비밀번호 찾기
      </Typography>
      <Typography sx={{ color: grey[600] }}>
        이메일 주소를 입력하시면 해당 메일 주소로 비밀번호 재설정 링크를
        보내드립니다.
      </Typography>
      <TextField
        type="text"
        variant="standard"
        label="이메일 주소"
        sx={{ mt: 2 }}
        value={email}
        onChange={onChangeEmail}
        error={!emailValid}
        helperText={!emailValid && "올바른 이메일 형식을 입력하세요."}
        autoFocus
      />
      <CTAButton
        onClick={onClickSubmitButton}
        isLoading={isLoading}
        disabled={!emailValid || email === ""}
      >
        이메일 보내기
      </CTAButton>
      <MuiLink
        sx={{ alignSelf: "center", cursor: "pointer" }}
        onClick={onClickReturnButton}
      >
        로그인으로 돌아가기
      </MuiLink>
    </Box>
  );
};

export default ForgotPassword;
