import React from "react";
import { Box } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import FloatingActionButton from "../common/FloatingActionButton";
import CreateIcon from "@mui/icons-material/Create";

interface Props {
  onClickPostButton: () => void;
}

const BoardPostListFAB: React.FC<Props> = ({ onClickPostButton }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <Box sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
      {!matches && (
        <FloatingActionButton shape="rounded" onClick={onClickPostButton}>
          <CreateIcon />
        </FloatingActionButton>
      )}
    </Box>
  );
};

export default BoardPostListFAB;
