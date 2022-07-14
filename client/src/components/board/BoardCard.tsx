import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  boardname: string;
  boardId: number;
}

const BoardCard: React.FC<Props> = ({ boardname, boardId }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <Link to={`/board/${boardId}`}>
      <Box sx={{ display: "flex", gap: 2, p: 2, cursor: "pointer" }}>
        <Avatar sx={{ width: "4rem", height: "4rem", ml: matches ? 2 : 0 }} />
        <Stack sx={{ flex: 1 }}>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">{boardname}</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
          <Typography sx={{ color: theme.primary }}>1,000개의 글</Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default BoardCard;
