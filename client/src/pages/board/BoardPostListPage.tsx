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
  const [totalPosts, setTotalPosts] = useState(1);
  const [popularPostList, setPopularPostList] =
    useState<GetPopularPostListResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [boardId, page]);

  const fetchPopularPostList = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getPopularPostListAPI(boardId);
      console.log("BoardPostListPage.tsx | getPopularPostListAPI response");
      console.log(response);
      setPopularPostList(response.data);
    } catch (error) {
      console.log("BoardPostListPage.tsx | getPopularPostListAPI error");
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
        <BoardPostListTitle onClickPostButton={onClickPostButton} />
        <BoardPostListTab tabValue={tabValue} onChangeTab={onChangeTab} />
        <BoardPostListContents
          isLoading={isLoading}
          sortParams={sortParams}
          postList={postList}
          popularPostList={popularPostList}
        />
      </PaperLayout>
      <BoardPostListPagination
        page={page}
        onChangePage={onChangePage}
        totalPosts={totalPosts}
      />
      <BoardPostListFAB onClickPostButton={onClickPostButton} />
    </Base>
  );
};

export default BoardPostListPage;
