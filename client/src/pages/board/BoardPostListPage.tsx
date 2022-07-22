import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { scrollToTop } from "../../lib/utils";
import PaperLayout from "../../components/layout/PaperLayout";
import { grey } from "@mui/material/colors";
import usePromptLogin from "../../hooks/usePromptLogin";
import { useSelector } from "../../store";
import {
  getPopularPostListAPI,
  getPostListByBoardAPI,
} from "../../lib/api/board";
import BoardPostListTitle from "../../components/board/BoardPostListTitle";
import BoardPostListTab from "../../components/board/BoardPostListTab";
import BoardPostListContents from "../../components/board/BoardPostListContents";
import BoardPostListPagination from "../../components/board/BoardPostListPagination";
import BoardPostListFAB from "../../components/board/BoardPostListFAB";
import BoardPostListSearchBar from "../../components/board/BoardPostListSearchBar";
import { Box, Paper, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import useMediaQuery from "../../hooks/useMediaQuery";

const Base = styled.div`
  background-color: ${grey[100]};
`;

const BoardPostListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get("page");
  const [tabValue, setTabValue] = useState("all" || "popular");
  const [page, setPage] = useState(Number(pageParams) || 1);
  const [postList, setPostList] = useState<BoardPostListType>([]);
  const [totalPosts, setTotalPosts] = useState(1);
  const [popularPostList, setPopularPostList] = useState<PopularPostListType>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const navigate = useNavigate();
  const location = useLocation();
  const promptLogin = usePromptLogin();
  const params = useParams();

  const boardId = Number(params.id);

  const searchKeyword = searchParams.get("keyword");
  console.log("@@@");
  console.log(searchKeyword);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const onChangeTab = (
    event: React.SyntheticEvent<Element, Event>,
    tabValue: string
  ) => {
    setTabValue(tabValue);
    setSearchParams("");
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
      const response = await getPostListByBoardAPI(boardId, location.search);
      console.log("BoardPostListPage.tsx | getPostListByBoardAPI response");
      console.log(response);
      setPostList(response.data.data);
      setTotalPosts(response.data.count);
    } catch (error) {
      console.log("BoardPostListPage.tsx | getPostListByBoardAPI error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [boardId, location.search]);

  const fetchPopularPostList = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getPopularPostListAPI(boardId, location.search);
      console.log("BoardPostListPage.tsx | getPopularPostListAPI response");
      console.log(response);
      setPopularPostList(response.data.data);
    } catch (error) {
      console.log("BoardPostListPage.tsx | getPopularPostListAPI error");
      console.log(error);
    }
  }, [boardId, location.search]);

  useEffect(() => {
    if (tabValue === "all") {
      fetchBoardPostList();
    }

    if (tabValue === "popular") {
      fetchPopularPostList();
    }
  }, [fetchBoardPostList, fetchPopularPostList, tabValue]);

  useEffect(() => {
    setPage(Number(pageParams) || 1);
  }, [pageParams]);

  return (
    <Base>
      <PaperLayout>
        <BoardPostListTitle onClickPostButton={onClickPostButton} />
        {searchKeyword && (
          <Box sx={{ p: matches ? 4 : 2 }}>
            <Typography variant="h6">
              "
              <Typography
                component="span"
                sx={{ color: theme.primary, fontSize: "1.5rem" }}
              >
                {searchKeyword}
              </Typography>
              "로 검색한 결과입니다.
            </Typography>
          </Box>
        )}
        <BoardPostListTab tabValue={tabValue} onChangeTab={onChangeTab} />
        <BoardPostListContents
          isLoading={isLoading}
          tabValue={tabValue}
          postList={postList}
          popularPostList={popularPostList}
        />
      </PaperLayout>
      <Paper
        square
        variant="outlined"
        sx={{
          width: matches ? theme.media.desktop : "100%",
          margin: "0 auto",
          py: 2,
          mt: 1,
        }}
      >
        <BoardPostListPagination
          page={page}
          onChangePage={onChangePage}
          totalPosts={totalPosts}
        />
        <BoardPostListSearchBar />
      </Paper>
      <BoardPostListFAB onClickPostButton={onClickPostButton} />
    </Base>
  );
};

export default BoardPostListPage;
