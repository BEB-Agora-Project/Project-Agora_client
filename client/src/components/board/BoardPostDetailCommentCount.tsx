import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import RefreshIcon from "@mui/icons-material/Refresh";

interface Props {
  commentList?: GetCommentListResponseType;
  onClickRefetchCommentButton: () => void;
  refetchCommentButtonDisabled: boolean;
}

const BoardPostDetailComment: React.FC<Props> = ({
  commentList,
  onClickRefetchCommentButton,
  refetchCommentButtonDisabled,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "1rem",
      }}
    >
      <Box display="inline-flex" gap={1}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          댓글
        </Typography>
        <Stack direction="row">
          <Typography variant="h6" color={theme.primary}>
            {commentList?.length}개
          </Typography>
        </Stack>
      </Box>
      <IconButton
        sx={{ width: "2rem", height: "2rem" }}
        onClick={onClickRefetchCommentButton}
        disabled={refetchCommentButtonDisabled}
        aria-label="refetch-comment"
      >
        <RefreshIcon />
      </IconButton>
    </Box>
  );
};

export default BoardPostDetailComment;
