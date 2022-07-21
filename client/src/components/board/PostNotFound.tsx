import React from "react";
import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "../common/Button";
import { theme } from "../../styles/theme";

interface Props {
  onClickReturnButton: () => void;
}

const PostNotFound: React.FC<Props> = ({ onClickReturnButton }) => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 3.5rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <ErrorIcon sx={{ width: "6rem", height: "6rem", color: theme.primary }} />
      <Typography>삭제되었거나 존재하지 않는 게시물입니다.</Typography>
      <Button onClick={onClickReturnButton}>돌아가기</Button>
    </Box>
  );
};

export default PostNotFound;
