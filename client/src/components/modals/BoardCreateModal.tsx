import { Box, Dialog, Stack, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { createBoardAPI } from "../../lib/api/board";
import { useDispatch, useSelector } from "../../store";
import { modalActions } from "../../store/modalSlice";
import { theme } from "../../styles/theme";
import Button from "../common/Button";

const BoardCreateModal: React.FC = () => {
  const [title, setTitle] = useState("");

  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const isBoardCreateModalOpen = useSelector(
    (state) => state.modal.isBoardCreateModalOpen
  );

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const closeModal = () => {
    dispatch(modalActions.setIsBoardCreateModalOpen(false));
  };

  const createBoard = async () => {
    try {
      const body = {
        boardname: title,
      };
      const response = await createBoardAPI(body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPrevButton = () => {
    closeModal();
  };

  const onClickCreateButton = () => {
    createBoard();
    closeModal();
  };

  useEffect(() => {
    return () => setTitle("");
  }, []);

  return (
    <Dialog open={isBoardCreateModalOpen} onClose={closeModal}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          커뮤니티 만들기
        </Typography>
        <Stack>
          <Typography sx={{ color: grey[500] }}>
            커뮤니티를 새로 만들기 위해서는 500 토큰을 지불해야 합니다.
          </Typography>
          <Typography sx={{ color: grey[900], mt: 2 }}>
            보유중인 토큰:{" "}
            <Typography component="span" sx={{ color: theme.primary }}>
              {token}
            </Typography>
            개
          </Typography>
          {token < 500 && (
            <Typography variant="body2" sx={{ color: theme.error }}>
              토큰이 부족합니다.
            </Typography>
          )}
        </Stack>
        <TextField
          variant="standard"
          label="커뮤니티 이름"
          value={title}
          onChange={onChangeTitle}
        />
        <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
          <Button variant="text" onClick={onClickPrevButton}>
            돌아가기
          </Button>
          <Button
            onClick={onClickCreateButton}
            disabled={title.length < 2 || token < 500}
          >
            생성하기
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default BoardCreateModal;
