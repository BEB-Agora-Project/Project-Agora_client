import { Box, Paper } from "@mui/material";
import React from "react";
import Pagination from "../common/Pagination";

interface Props {
  page: number;
  onChangePage: (page: number) => void;
  totalPosts: number;
}

const BoardPostListPagination: React.FC<Props> = ({
  page,
  onChangePage,
  totalPosts,
}) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        mt: 1,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            totalPosts={totalPosts}
            currentPage={page}
            onChangePage={onChangePage}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default BoardPostListPagination;
