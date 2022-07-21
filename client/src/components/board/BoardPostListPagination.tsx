import { Box, Paper } from "@mui/material";
import React from "react";
import Pagination from "../common/Pagination";

interface Props {
  page: number;
  onChangePage: (page: number) => void;
}

const BoardPostListPagination: React.FC<Props> = ({ page, onChangePage }) => {
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
            totalPosts={100}
            currentPage={page}
            onChangePage={onChangePage}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default BoardPostListPagination;
