import React, { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { updatePasswordAPI } from "../../lib/api/user";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validated =
    password === passwordConfirm && password !== "" && passwordConfirm !== "";

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

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

      const response = await updatePasswordAPI(body);
      console.log("ChangePassword.tsx | updatePasswordAPI response");
      console.log(response);
      alert("변경되었습니다.");
      setPassword("");
      setPasswordConfirm("");
    } catch (error) {
      console.log("ChangePassword.tsx | updatePasswordAPI error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const onClickSubmitButton = () => {
    changePassword();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        p: matches ? 4 : 2,
      }}
    >
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
    </Box>
  );
};

export default ChangePassword;
