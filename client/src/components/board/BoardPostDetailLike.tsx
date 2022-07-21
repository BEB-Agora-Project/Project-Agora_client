import { Box, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { theme } from "../../styles/theme";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  postDetail?: PostDetailType;
  onClickLikeButton: () => void;
  onClickDislikeButton: () => void;
}

const BoardPostDetailLike: React.FC<Props> = ({
  postDetail,
  onClickLikeButton,
  onClickDislikeButton,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        alignItems: "center",
        pt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6" color={theme.primary}>
          {postDetail?.up}
        </Typography>
        <IconButton sx={{ bgcolor: grey[50] }} onClick={onClickLikeButton}>
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
      <Box sx={{ width: "2px", height: "20px", bgcolor: grey[100] }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton sx={{ bgcolor: grey[50] }} onClick={onClickDislikeButton}>
          <KeyboardArrowDownIcon />
        </IconButton>
        <Typography variant="h6" color={theme.error}>
          {postDetail?.down}
        </Typography>
      </Box>
    </Box>
  );
};

export default BoardPostDetailLike;
