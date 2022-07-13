import styled from "@emotion/styled";
import { Box, Input, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import BoardPostCard from "../../components/board/BoardPostCard";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { getLastPathname } from "../../lib/utils";
import { theme } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import Button from "../../components/common/Button";
import FloatingActionButton from "../../components/common/FloatingActionButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import PaperLayout from "../../components/layout/PaperLayout";
import { grey } from "@mui/material/colors";
import Pagination from "../../components/common/Pagination";
import usePromtLogin from "../../hooks/usePromtLogin";
import { useSelector } from "../../store";

const Base = styled.div`
  background-color: ${grey[100]};
`;

const BoardPostList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParams = searchParams.get("sort");
  const pageParams = searchParams.get("page");

  const [tabValue, setTabValue] = useState(sortParams || "all");
  const [page, setPage] = useState(Number(pageParams) || 1);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const navigate = useNavigate();

  const location = useLocation();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const promtLogin = usePromtLogin();

  const onChangeTab = (
    event: React.SyntheticEvent<Element, Event>,
    tabValue: string
  ) => {
    setTabValue(tabValue);
    setSearchParams(`sort=${tabValue}`);
  };

  const onChangePage = (page: number) => {
    setPage(page);

    searchParams.delete("page");
    searchParams.append("page", String(page));
    setSearchParams(searchParams);
  };

  const onClickPostButton = () => {
    if (!isLoggedIn) return promtLogin();

    navigate(`${location.pathname}/write`);
  };

  useEffect(() => {
    setPage(Number(pageParams) || 1);
  }, [pageParams]);

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box
          sx={{
            p: matches ? 4 : 2,
            mt: 2,
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              # 아고라 커뮤니티 {getLastPathname(location.pathname)}
            </Typography>
            <Button onClick={onClickPostButton}>글쓰기</Button>
          </Stack>
          <Typography sx={{ color: grey[500] }}>
            커뮤니티 매니저: 노논
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            borderBottom: 1,
            borderColor: "divider",
            justifyContent: "space-between",
          }}
        >
          <Tabs value={tabValue} onChange={onChangeTab}>
            <Tab label="전체" value="all" sx={{ fontSize: "1rem" }} />
            <Tab label="인기글" value="popular" sx={{ fontSize: "1rem" }} />
          </Tabs>
        </Box>
        <BoardPostCard
          postId={1}
          title="글제목 123"
          commentCount={1}
          username="닉네임"
          createdAt="2022.07.09 02:22"
          views={11}
          likes={11}
          image
          isPopular
        />
        <BoardPostCard
          postId={1}
          title="글제목 123"
          commentCount={1}
          username="닉네임"
          createdAt="2022.07.09 02:22"
          views={11}
          likes={11}
          image
          isPopular
        />
        <BoardPostCard
          postId={1}
          title="글제목 123"
          commentCount={1}
          username="닉네임"
          createdAt="2022.07.09 02:22"
          views={11}
          likes={11}
          image
          isPopular
        />
        {FAKE_ARRAY.map((_, index) => (
          <BoardPostCard
            key={index}
            postId={1}
            title="글제목 123"
            commentCount={1}
            username="닉네임"
            createdAt="2022.07.09 02:22"
            views={11}
            likes={11}
            image
          />
        ))}
      </PaperLayout>
      <Paper variant="outlined" square sx={{ mt: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              totalPosts={95}
              currentPage={page}
              onChangePage={onChangePage}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Input />
            <SearchIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
        <Box sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
          {!matches && (
            <FloatingActionButton shape="rounded" onClick={onClickPostButton}>
              <CreateIcon />
            </FloatingActionButton>
          )}
        </Box>
      </Paper>
    </Base>
  );
};

export default BoardPostList;
