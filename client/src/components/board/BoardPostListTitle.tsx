import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

interface Props {
  setTabValue: React.Dispatch<React.SetStateAction<string>>;
  onClickPostButton: () => void;
  fetchBoardPostList: () => void;
  boardname: string;
  totalPosts: number;
}

const BoardPostListTitle: React.FC<Props> = ({
  setTabValue,
  onClickPostButton,
  fetchBoardPostList,
  boardname,
  totalPosts,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const location = useLocation();
  const navigate = useNavigate();

  const onClickBoardTitle = () => {
    navigate(location.pathname);
    setTabValue("all");
    fetchBoardPostList();
  };

  return (
    <Box
      sx={{
        p: matches ? 4 : 2,
        mt: 2,
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={onClickBoardTitle}
        >
          <Typography
            component="span"
            sx={{ color: theme.primary, fontSize: "1.5rem" }}
          >
            #{" "}
          </Typography>
          {boardname}
        </Typography>
        <Button onClick={onClickPostButton}>글쓰기</Button>
      </Stack>
      <Typography sx={{ color: grey[500] }}>
        총 게시글:{" "}
        <Typography component="span" sx={{ color: theme.primary }}>
          {totalPosts}
        </Typography>
        개
      </Typography>
    </Box>
  );
};

export default BoardPostListTitle;
