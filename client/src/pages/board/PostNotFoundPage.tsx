import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import PaperLayout from "../../components/layout/PaperLayout";
import ErrorIcon from "@mui/icons-material/Error";
import { theme } from "../../styles/theme";

const Base = styled.div``;

const PostNotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const onClickReturnButton = () => {
    navigate(-1);
  };

  return (
    <Base>
      <PaperLayout>
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
          <ErrorIcon
            sx={{ width: "6rem", height: "6rem", color: theme.primary }}
          />
          <Typography>삭제되었거나 존재하지 않는 게시물입니다.</Typography>
          <Button onClick={onClickReturnButton}>돌아가기</Button>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default PostNotFoundPage;
