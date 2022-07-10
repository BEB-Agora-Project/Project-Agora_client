import styled from "@emotion/styled";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import BoardCard from "../../components/BoardCard";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import BoardCardSkeleton from "../../components/skeletons/BoardCardSkeleton";
import PaperLayout from "../../components/PaperLayout";

const Base = styled.div``;

const BoardList: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onClickFetchMoreButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            게시판 목록
          </Typography>
        </Box>
        <BoardCard />
        <Divider />
        <BoardCard />
        <Divider />
        <BoardCard />
        <Divider />
        <BoardCard />
        <Divider />
        {loading && (
          <>
            <BoardCardSkeleton />
            <BoardCardSkeleton />
            <BoardCardSkeleton />
          </>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <IconButton onClick={onClickFetchMoreButton}>
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default BoardList;
