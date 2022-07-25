import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import RefreshIcon from "@mui/icons-material/Refresh";
import { grey } from "@mui/material/colors";

interface Props {
  commentList?: GetCommentListResponseType;
  commentSort: "latest" | "oldest";
  setCommentSort: React.Dispatch<React.SetStateAction<"oldest" | "latest">>;
  onClickRefetchCommentButton: () => void;
  refetchCommentButtonDisabled: boolean;
}

const BoardPostDetailComment: React.FC<Props> = ({
  commentList,
  commentSort,
  setCommentSort,
  onClickRefetchCommentButton,
  refetchCommentButtonDisabled,
}) => {
  const getCommentSortStyle = (active: boolean) => {
    if (active) {
      return {
        transition: "0.2s ease",
        fontWeight: 700,
        cursor: "pointer",
      };
    }

    if (!active) {
      return {
        transition: "0.2s ease",
        color: grey[500],
        cursor: "pointer",
      };
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "1rem",
      }}
    >
      <Box display="inline-flex" gap={1} sx={{ alignItems: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          댓글
        </Typography>
        <Stack direction="row">
          <Typography variant="h6" color={theme.primary}>
            {commentList?.length}개
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ ml: 2, alignItems: "center" }}>
          <Typography
            sx={getCommentSortStyle(commentSort === "oldest")}
            onClick={() => setCommentSort("oldest")}
          >
            등록순
          </Typography>
          <Typography
            sx={getCommentSortStyle(commentSort === "latest")}
            onClick={() => setCommentSort("latest")}
          >
            최신순
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
