import { Box, Dialog, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../store";
import { modalActions } from "../../store/modalSlice";
import Button from "../common/Button";

const LoginPromptModal: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isLoginPromptModalOpen = useSelector(
    (state) => state.modal.loginPromptModalOpen
  );

  const closeModal = () => {
    dispatch(modalActions.setLoginPromptModalOpen(false));
  };

  const onClickPrevButton = () => {
    closeModal();
  };

  const onClickLoginButton = () => {
    navigate("/login");
    closeModal();
  };

  return (
    <Dialog open={isLoginPromptModalOpen} onClose={closeModal}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography>로그인이 필요한 기능입니다. 로그인하시겠습니까?</Typography>
        <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
          <Button variant="text" onClick={onClickPrevButton}>
            돌아가기
          </Button>
          <Button onClick={onClickLoginButton}>로그인</Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default LoginPromptModal;
