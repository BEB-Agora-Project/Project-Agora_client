import {
  Avatar,
  Box,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { useDispatch, useSelector } from "../../store";
import { modalActions } from "../../store/modalSlice";
import CloseIcon from "@mui/icons-material/Close";

const EmojiCommentModal: React.FC = () => {
  const isEmojiCommentModalOpen = useSelector(
    (state) => state.modal.isEmojiCommentModalOpen
  );

  const dispatch = useDispatch();

  const onCloseEmojiCommentModal = () => {
    dispatch(modalActions.setIsEmojiCommentModalOpen(false));
  };

  const onClickEmoji = () => {
    // api call
  };

  return (
    <Dialog open={isEmojiCommentModalOpen} onClose={onCloseEmojiCommentModal}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            이모티콘
          </Typography>
          <IconButton onClick={onCloseEmojiCommentModal}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography variant="h6">기본 이모티콘</Typography>
        <Stack direction="row" spacing={4} sx={{ overflow: "scroll", py: 4 }}>
          {FAKE_ARRAY.map((_, index) => (
            <Avatar
              key={index}
              sx={{ width: "6rem", height: "6rem", cursor: "pointer" }}
              onClick={onClickEmoji}
            />
          ))}
        </Stack>
        <Typography variant="h6">보유중인 이모티콘</Typography>
        <Stack direction="row" spacing={4} sx={{ overflow: "scroll", py: 4 }}>
          <Typography>보유중인 이모티콘이 없습니다.</Typography>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default EmojiCommentModal;
