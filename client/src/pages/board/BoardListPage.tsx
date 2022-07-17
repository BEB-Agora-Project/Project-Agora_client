import styled from "@emotion/styled";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import BoardCardSkeleton from "../../components/skeletons/BoardCardSkeleton";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";
import Button from "../../components/common/Button";
import BoardCard from "../../components/board/BoardCard";
import { useDispatch, useSelector } from "../../store";
import usePromtLogin from "../../hooks/usePromptLogin";
import { modalActions } from "../../store/modalSlice";
import { getBoardListAPI } from "../../lib/api/board";

const Base = styled.div``;

const BoardList: React.FC = () => {
  const [boardList, setBoardList] = useState<GetBoardListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const filteredBoardList = boardList.filter((board) =>
    board.boardname.includes(searchInput)
  );

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const promptLogin = usePromtLogin();
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const onClickFetchMoreButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const onClickCreateButton = () => {
    if (!isLoggedIn) return promptLogin();

    dispatch(modalActions.setIsBoardCreateModalOpen(true));
  };

  const fetchBoardList = async () => {
    try {
      const response = await getBoardListAPI();
      console.log(response.data);
      setBoardList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  return (
    <Base>
      <PaperLayout>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <TextField
            variant="standard"
            value={searchInput}
            onChange={onChangeSearchInput}
            label="검색"
            fullWidth={!matches}
          />
        </Box>
        {filteredBoardList.map((board, index) => (
          <div key={index}>
            <Divider />
            <BoardCard boardname={board.boardname} boardId={board.id} />
          </div>
        ))}
        {isLoading && (
          <>
            <BoardCardSkeleton />
            <BoardCardSkeleton />
          </>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          {!isLoading && boardList.length !== 0 && (
            <IconButton onClick={onClickFetchMoreButton}>
              <KeyboardDoubleArrowDownIcon />
            </IconButton>
          )}
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default BoardList;
