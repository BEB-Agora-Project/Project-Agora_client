import { Box, CircularProgress, Divider } from "@mui/material";
import React from "react";
import BoardCard from "./BoardCard";

interface Props {
  boardList?: GetBoardListAPIResponseType;
  isLoading: boolean;
  searchInput: string;
}

const BoardListContents: React.FC<Props> = ({
  boardList,
  isLoading,
  searchInput,
}) => {
  const filteredBoardList = boardList?.filter((board) =>
    board.boardname.includes(searchInput)
  );

  return (
    <>
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
      {filteredBoardList &&
        filteredBoardList.map((board, index) => (
          <div key={index}>
            <Divider />
            <BoardCard boardname={board.boardname} boardId={board.id} />
          </div>
        ))}
      <Divider />
    </>
  );
};

export default BoardListContents;
