import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import { getLastPathname } from "../../lib/utils";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";

interface Props {
  onClickPostButton: () => void;
}

const BoardPostListTitle: React.FC<Props> = ({ onClickPostButton }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const location = useLocation();

  return (
    <Box
      sx={{
        p: matches ? 4 : 2,
        mt: 2,
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          # 아고라 커뮤니티 {getLastPathname(location.pathname)}
        </Typography>
        <Button onClick={onClickPostButton}>글쓰기</Button>
      </Stack>
      <Typography sx={{ color: grey[500] }}>커뮤니티 매니저: 노논</Typography>
    </Box>
  );
};

export default BoardPostListTitle;
