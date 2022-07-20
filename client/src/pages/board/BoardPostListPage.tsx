import styled from "@emotion/styled";
import { Box, Input, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BoardPostCard from "../../components/board/BoardPostCard";
import { getLastPathname, scrollToTop } from "../../lib/utils";
import { theme } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import Button from "../../components/common/Button";
import FloatingActionButton from "../../components/common/FloatingActionButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import PaperLayout from "../../components/layout/PaperLayout";
import { grey } from "@mui/material/colors";
import Pagination from "../../components/common/Pagination";
import usePromptLogin from "../../hooks/usePromptLogin";
import { useSelector } from "../../store";
import {
  getPopularPostListAPI,
  getPostListByBoardAPI,
} from "../../lib/api/board";
import LoadingSpinnerBox from "../../components/layout/LoadingSpinnerBox";
import EmptyPostNotification from "../../components/layout/EmptyPostNotification";

const Base = styled.div`
  background-color: ${grey[100]};
`;

const BoardPostListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParams = searchParams.get("sort");
  const pageParams = searchParams.get("page");
  const [tabValue, setTabValue] = useState(sortParams || "all");
  const [page, setPage] = useState(Number(pageParams) || 1);
  const [postList, setPostList] = useState<BoardPostListType>([]);
  const [popularPostList, setPopularPostList] =
    useState<GetPopularPostListResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const navigate = useNavigate();
  const location = useLocation();
  const promptLogin = usePromptLogin();
  const params = useParams();

  const boardId = Number(params.id);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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

    scrollToTop();
  };

  const onClickPostButton = () => {
    if (!isLoggedIn) return promptLogin();

    navigate(`${location.pathname}/write`);
  };

  const fetchBoardPostList = useCallback(async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const response = await getPostListByBoardAPI(boardId, page);
      console.log(response);
      setPostList(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [boardId, page]);

  const fetchPopularPostList = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getPopularPostListAPI(boardId);
      console.log("@@@ popular post list @@@");
      console.log(response);
      setPopularPostList(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [boardId]);

  useEffect(() => {
    fetchBoardPostList();

    if (sortParams === "popular") {
      fetchPopularPostList();
    }
  }, [fetchBoardPostList, fetchPopularPostList, sortParams]);

  useEffect(() => {
    setPage(Number(pageParams) || 1);
  }, [pageParams]);

  return (
    <Base>
      <PaperLayout>
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
        {isLoading && <LoadingSpinnerBox height="18rem" />}
        {postList &&
          sortParams !== "popular" &&
          postList.map((post, index) => (
            <BoardPostCard
              key={index}
              postId={post.id}
              title={post.title}
              commentCount={post.Comments.length}
              username={post.User.username}
              createdAt={post.createdAt}
              views={post.hit}
              likes={post.up}
              image
            />
          ))}
        {popularPostList &&
          sortParams === "popular" &&
          popularPostList.map((post, index) => (
            <BoardPostCard
              key={index}
              postId={post.id}
              title={post.title}
              commentCount={post.Comments.length}
              username={post.User.username}
              createdAt={post.createdAt}
              views={post.hit}
              likes={post.up}
              image
              isPopular
            />
          ))}
        {postList.length === 0 && sortParams !== "popular" && (
          <EmptyPostNotification />
        )}
        {popularPostList.length === 0 && sortParams === "popular" && (
          <EmptyPostNotification />
        )}
      </PaperLayout>
      <Paper variant="outlined" square sx={{ mt: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              totalPosts={100}
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

export default BoardPostListPage;
