import React from "react";
import { Box, TextField } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

interface Props {
  searchInput: string;
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BoardListSearchBar: React.FC<Props> = ({
  searchInput,
  onChangeSearchInput,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
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
  );
};

export default BoardListSearchBar;
