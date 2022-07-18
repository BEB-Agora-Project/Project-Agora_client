import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import PaperLayout from "../../components/layout/PaperLayout";

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography sx={{ mt: 30 }}>
            삭제되었거나 존재하지 않는 게시물입니다.
          </Typography>
          <Button onClick={onClickReturnButton}>돌아가기</Button>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default PostNotFoundPage;
