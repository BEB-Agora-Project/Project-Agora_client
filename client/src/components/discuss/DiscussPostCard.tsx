import React from "react";
import styled from "@emotion/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";
import { parseDateRelative } from "../../lib/utils";
import { Link } from "react-router-dom";

const Base = styled.div``;

interface Props {
  username: string;
  createdAt: Date;
  likes: number;
  contents: string;
  postId: number;
}

const DiscussPostCard: React.FC<Props> = ({
  username,
  createdAt,
  likes,
  contents,
  postId,
}) => {
  return (
    <Link to={`/discuss/post/${postId}`}>
      <Base>
        <Box
          sx={{
            border: `1px solid ${grey[500]}`,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Typography variant="h6">{username}</Typography>
              <Typography variant="body1" sx={{ color: grey[500] }}>
                {parseDateRelative(createdAt)}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", mr: 1 }}
            >
              <IconButton>
                <KeyboardArrowUpIcon />
              </IconButton>
              <Typography variant="h6" sx={{ color: theme.primary }}>
                {likes}
              </Typography>
            </Stack>
          </Stack>
          <Typography>{contents}</Typography>
        </Box>
      </Base>
    </Link>
  );
};

export default DiscussPostCard;
