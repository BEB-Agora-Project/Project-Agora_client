import React from "react";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";
import { parseDateRelative, shortenText } from "../../lib/utils";
import { Link } from "react-router-dom";

const Base = styled.div``;

interface Props {
  username: string;
  createdAt: Date;
  likes: number;
  dislikes: number;
  title: string;
  contents: string;
  postId: number;
}

const DiscussPostCard: React.FC<Props> = ({
  username,
  createdAt,
  likes,
  dislikes,
  contents,
  postId,
  title,
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
              <KeyboardArrowUpIcon />
              <Typography variant="h6" sx={{ color: theme.primary }}>
                {likes}
              </Typography>
              <KeyboardArrowDownIcon />
              <Typography variant="h6" sx={{ color: theme.error }}>
                {dislikes}
              </Typography>
            </Stack>
          </Stack>
          <Typography>{title}</Typography>
          <Typography variant="body2" color={grey[500]}>
            {shortenText(contents, 50)}
          </Typography>
        </Box>
      </Base>
    </Link>
  );
};

export default DiscussPostCard;
