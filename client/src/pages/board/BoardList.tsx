import styled from "@emotion/styled";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import BoardCardSkeleton from "../../components/skeletons/BoardCardSkeleton";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";
import Button from "../../components/common/Button";
import { FAKE_ARRAY } from "../../lib/dummyData";
import BoardCard from "../../components/board/BoardCard";

const Base = styled.div``;

const BoardList: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  console.log(matches);

  const onClickFetchMoreButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box sx={{ p: matches ? 4 : 2 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              아고라 커뮤니티
            </Typography>
            <Button>생성하기</Button>
          </Stack>
          <Typography sx={{ color: grey[500], mt: 1 }}>
            원하는 커뮤니티를 찾아보세요. 토큰을 소모하여 새로운 커뮤니티를 만들
            수도 있습니다.
          </Typography>
        </Box>
        {FAKE_ARRAY.map((_, index) => (
          <div key={index}>
            <Divider />
            <BoardCard />
          </div>
        ))}
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
