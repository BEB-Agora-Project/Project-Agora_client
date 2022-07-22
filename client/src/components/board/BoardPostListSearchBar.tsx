import React, { useState } from "react";
import { Box, Divider, IconButton, Input, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { useSearchParams } from "react-router-dom";
import { scrollToTop } from "../../lib/utils";

const BoardPostListSearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const [, setSearchParams] = useSearchParams();

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const searchPost = () => {
    setSearchParams(`keyword=${searchInput}`);
  };

  const onClickSearchButton = () => {
    if (!searchInput) return;
    setSearchInput("");
    searchPost();
    scrollToTop();
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchInput) return;

    if (event.key === "Enter") {
      setSearchInput("");
      searchPost();
      scrollToTop();
    }
  };

  return (
    <>
      {!matches && (
        <Box sx={{ my: 2 }}>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "3rem",
              p: 2,
            }}
          >
            <InputBase
              value={searchInput}
              onChange={onChangeSearchInput}
              placeholder="검색"
              sx={{ width: "100%" }}
              onKeyDown={onEnter}
            />
          </Box>
          <Divider />
        </Box>
      )}
      {matches && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            px: 2,
            transform: "translateX(2rem)",
          }}
        >
          <Input
            value={searchInput}
            onChange={onChangeSearchInput}
            sx={{ width: "16rem" }}
            onKeyDown={onEnter}
          />
          <IconButton aria-label="search-post" onClick={onClickSearchButton}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default BoardPostListSearchBar;
