import styled from "@emotion/styled";
import { Paper, TextField, Typography, Link as MuiLink } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import LoadingButton from "../../components/common/LoadingButton";
import { EMAIL_REG_EXP } from "../../lib/staticData";
import { theme } from "../../styles/theme";

const Base = styled.div`
  background-color: ${grey[100]};

  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
    min-height: calc(100vh - 3.5rem);
    padding: 1rem;
    gap: 1rem;
  }

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

  @media screen and (min-width: ${theme.media.desktop}) {
    .section {
      margin: 0 auto;
      width: 37.5rem;
      padding: 2rem;
    }
  }
`;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);

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
      <Paper className="section">
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
      </Paper>
    </Base>
  );
};

export default ForgotPassword;
