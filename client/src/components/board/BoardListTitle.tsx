import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import Button from "../common/Button";

interface Props {
  onClickCreateButton: () => void;
}

const BoardListTitle: React.FC<Props> = ({ onClickCreateButton }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
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
  );
};

export default BoardListTitle;
