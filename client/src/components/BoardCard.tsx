import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { theme } from "../styles/theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BoardCard: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <Link to="/board/1">
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
            <Typography variant="h6">커뮤니티 이름</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
          <Typography sx={{ color: "text.secondary" }}>1,000개의 글</Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default BoardCard;
