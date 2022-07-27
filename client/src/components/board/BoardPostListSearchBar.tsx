import React, { useRef, useState } from "react";
import { Box, Divider, IconButton, Input, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../lib/utils";

const BoardPostListSearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const location = useLocation();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  const searchPost = () => {
    const searchParams = new URLSearchParams();
    searchParams.set("keyword", searchInput);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const onClickSearchButton = () => {
    if (!searchInput) return;
    searchPost();
    setSearchInput("");
    scrollToTop();
    if (inputRef.current !== null) inputRef.current.blur();
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchInput) return;

    if (event.key === "Enter") {
      searchPost();
      setSearchInput("");
      scrollToTop();
      if (inputRef.current !== null) inputRef.current.blur();
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
              inputRef={inputRef}
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
            inputRef={inputRef}
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
