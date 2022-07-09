import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface BaseProps {
  likes: number;
  isPopular?: boolean;
  viewed?: boolean;
}

const Base = styled.li<BaseProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  &:hover {
    background-color: ${grey[100]};
  }

  .post-likes {
    color: ${theme.primary};

    ${({ likes }) => {
      if (likes > 0) {
        return css`
          color: ${theme.primary};
        `;
      }
      if (likes < 0) {
        return css`
          color: ${theme.error};
        `;
      }
    }}
  }

  ${({ isPopular }) =>
    isPopular &&
    css`
      background-color: ${theme.primaryLight};
      &:hover {
        background-color: ${theme.primarySemiLight};
      }
    `}
`;

interface Props {
  postId: number;
  title: string;
  commentCount: number;
  username: string;
  createdAt: string;
  views: number;
  likes: number;
  isPopular?: boolean;
  viewed?: boolean;
  community?: string;
}

const BoardPostCard: React.FC<Props> = ({
  postId,
  title,
  commentCount,
  username,
  createdAt,
  isPopular,
  views,
  likes,
  viewed,
}) => {
  return (
    <Link to={`/board/post/${postId}`}>
      <Base isPopular={isPopular} viewed={viewed} likes={likes}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            {isPopular && (
              <Chip
                sx={{ mr: 1, color: "white", bgcolor: theme.primary }}
                size="small"
                label="인기"
              />
            )}
            <Typography
              variant="caption"
              sx={{ fontSize: "1rem", mr: "0.5rem" }}
            >
              {title}
            </Typography>
            {commentCount !== 0 && (
              <Typography
                variant="caption"
                sx={{ fontSize: "1rem", color: theme.primary }}
              >
                [{commentCount}]
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <KeyboardArrowUpIcon sx={{ color: grey[600] }} />
            <Typography className="post-likes">{likes}</Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1">{username}</Typography>
          <Typography variant="caption" color={grey[500]}>
            {createdAt}
          </Typography>
          <Typography variant="caption" color={grey[500]}>
            조회수 {views}
          </Typography>
        </Stack>
      </Base>
      <Divider />
    </Link>
  );
};

export default BoardPostCard;
