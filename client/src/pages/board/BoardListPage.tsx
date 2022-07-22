import React, { useEffect, useState } from "react";
import PaperLayout from "../../components/layout/PaperLayout";
import { useDispatch, useSelector } from "../../store";
import usePromtLogin from "../../hooks/usePromptLogin";
import { modalActions } from "../../store/modalSlice";
import { getBoardListAPI } from "../../lib/api/board";
import BoardListTitle from "../../components/board/BoardListTitle";
import BoardListSearchBar from "../../components/board/BoardListSearchBar";
import BoardListContents from "../../components/board/BoardListContents";
import { scrollToTop } from "../../lib/utils";

const BoardList: React.FC = () => {
  const [boardList, setBoardList] = useState<GetBoardListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const promptLogin = usePromtLogin();

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const onClickCreateButton = () => {
    if (!isLoggedIn) return promptLogin();

    dispatch(modalActions.setIsBoardCreateModalOpen(true));
  };

  const fetchBoardList = async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const response = await getBoardListAPI();
      console.log("BoardListPage.tsx | getBoardListAPI response");
      console.log(response);
      setBoardList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("BoardListPage.tsx | getBoardListAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <PaperLayout>
      <BoardListTitle onClickCreateButton={onClickCreateButton} />
      <BoardListSearchBar
        searchInput={searchInput}
        onChangeSearchInput={onChangeSearchInput}
      />
      <BoardListContents
        boardList={boardList}
        isLoading={isLoading}
        searchInput={searchInput}
      />
    </PaperLayout>
  );
};

export default BoardList;
