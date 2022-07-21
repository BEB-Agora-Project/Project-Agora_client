import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 12,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {filteredBoardList.map((board, index) => (
          <div key={index}>
            <Divider />
            <BoardCard boardname={board.boardname} boardId={board.id} />
          </div>
        ))}
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}></Box>
      </PaperLayout>
    </Base>
  );
};

export default BoardList;
