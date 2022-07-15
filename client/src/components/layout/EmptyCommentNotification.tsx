import React from "react";
import { Box, Typography } from "@mui/material";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import { grey } from "@mui/material/colors";

const EmptyCommentNotification: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        p: 4,
      }}
    >
      <CommentsDisabledIcon
        sx={{ width: "4rem", height: "4rem", color: grey[300] }}
      />
      <Typography sx={{ color: grey[300] }}>작성된 댓글이 없습니다.</Typography>
    </Box>
  );
};

export default EmptyCommentNotification;
