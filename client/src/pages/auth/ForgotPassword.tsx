import styled from "@emotion/styled";
import { TextField, Typography, Link as MuiLink, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import LoadingButton from "../../components/common/LoadingButton";
import PaperLayout from "../../components/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { EMAIL_REG_EXP } from "../../lib/staticData";
import { theme } from "../../styles/theme";

const Base = styled.div`
  .button {
    height: 4rem;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  .loading-button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 2rem;
  }
`;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const navigate = useNavigate();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const validateEmail = (email: string) => {
    setEmailValid(EMAIL_REG_EXP.test(email) || email === "");
  };

  const onClickSubmitButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/find/email-sent");
    }, 2000);
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
          {!loading && (
            <Button
              className="button"
              onClick={onClickSubmitButton}
              disabled={!emailValid || email === ""}
            >
              이메일 보내기
            </Button>
          )}
          {loading && (
            <LoadingButton className="loading-button" ringSize="large" />
          )}
          <MuiLink
            sx={{ alignSelf: "center", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            로그인으로 돌아가기
          </MuiLink>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default ForgotPassword;
