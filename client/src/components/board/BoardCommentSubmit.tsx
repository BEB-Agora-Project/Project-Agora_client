import React from "react";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import Textarea from "../common/Textarea";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CTAButton from "../common/CTAButton";

interface Props {
  onClickSubmitButton: () => void;
  onChangeCommentTextarea?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoggedIn: "init" | boolean;
  commentTextarea?: string;
  onClickEmojiCommentButton: () => void;
}

const BoardCommentSubmit: React.FC<Props> = ({
  onClickSubmitButton,
  onChangeCommentTextarea,
  isLoggedIn,
  commentTextarea,
  onClickEmojiCommentButton,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">댓글 쓰기</Typography>
        <Tooltip title="이모티콘" placement="top">
          <IconButton
            sx={{ color: theme.primary }}
            onClick={onClickEmojiCommentButton}
          >
            <EmojiEmotionsIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Textarea
        value={commentTextarea}
        onChange={onChangeCommentTextarea}
        height="6rem"
        placeholder={
          isLoggedIn
            ? "댓글은 200자 이내로 작성해주세요."
            : "로그인 후 이용하실 수 있습니다."
        }
      />
      <CTAButton
        onClick={onClickSubmitButton}
        disabled={!commentTextarea}
        responsive
      >
        등록
      </CTAButton>
    </Box>
  );
};

export default BoardCommentSubmit;
