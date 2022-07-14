import styled from "@emotion/styled";
import { Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { updatePasswordAPI } from "../../lib/api/user";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";

const Base = styled.div`
  .button {
    height: 4rem;
    font-size: 1.25rem;
  }

  .loading-button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .button {
      align-self: flex-end;
      height: auto;
      font-size: 1rem;
    }
  }
`;

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validated =
    password === passwordConfirm && password !== "" && passwordConfirm !== "";

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePasswordConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const changePassword = async () => {
    /*********************** API call **************************/
    setIsLoading(true);
    try {
      const body = {
        password: password,
      };

      await updatePasswordAPI(body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const onClickSubmitButton = () => {
    changePassword();
  };

  return (
    <Base>
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ mt: 2 }}>
          비밀번호 변경하기
        </Typography>
        <Stack spacing={4}>
          <TextField
            type="password"
            variant="standard"
            label="변경할 비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <TextField
            type="password"
            variant="standard"
            label="비밀번호 확인"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
        </Stack>
        {!isLoading && (
          <Button
            className="button"
            disabled={!validated}
            onClick={onClickSubmitButton}
          >
            변경하기
          </Button>
        )}
        {isLoading && (
          <LoadingButton className="loading-button" ringSize="large" />
        )}
      </Stack>
    </Base>
  );
};

export default ChangePassword;
