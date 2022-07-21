import React from "react";
import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BoardPostListSearchBar: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <Input />
      <SearchIcon sx={{ cursor: "pointer" }} />
    </Box>
  );
};

export default BoardPostListSearchBar;
