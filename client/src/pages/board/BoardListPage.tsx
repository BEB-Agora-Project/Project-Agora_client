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
import { useSelector } from "../../store";
import usePromtLogin from "../../hooks/usePromptLogin";

const Base = styled.div``;

const BoardList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const promptLogin = usePromtLogin();
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  console.log(matches);

  const onClickFetchMoreButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const onClickCreateButton = () => {
    if (!isLoggedIn) return promptLogin();
  };

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box sx={{ p: matches ? 4 : 2 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              아고라 커뮤니티
            </Typography>
            <Button onClick={onClickCreateButton}>생성하기</Button>
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
        {isLoading && (
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
