import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme";
import { Avatar, Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ImageIcon from "@mui/icons-material/Image";
import {
  getBadgeImageSrc,
  parseDateAbsolute,
  parseDateShort,
} from "../../lib/utils";

interface BaseProps {
  likes: number;
  isPopular?: boolean;
  viewed?: boolean;
}

const Base = styled.li<BaseProps>`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;

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
  createdAt: Date;
  views: number;
  badge?: string;
  likes: number;
  isPopular?: boolean;
  viewed?: boolean;
  community?: string;
  image?: boolean;
  viewType?: "image" | "text";
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
  image,
  badge,
  viewType,
}) => {
  return (
    <Link to={`/board/post/${postId}`}>
      <Base isPopular={isPopular} viewed={viewed} likes={likes}>
        {viewType === "image" && (
          <Avatar variant="square" sx={{ width: "4rem", height: "4rem" }} />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row">
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
                  sx={{
                    fontSize: "1rem",
                    color: theme.primary,
                    mr: "0.5rem",
                    transform: "translateY(-0.05rem)",
                  }}
                >
                  {commentCount !== 0 && `[${commentCount}]`}
                </Typography>
              )}
              {image && viewType === "text" && (
                <ImageIcon
                  sx={{
                    color: grey[400],
                    transform: "translateY(0.05rem)",
                  }}
                />
              )}
            </Stack>
            {likes > 0 && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <KeyboardArrowUpIcon sx={{ color: grey[600] }} />
                <Typography className="post-likes">{likes}</Typography>
              </Box>
            )}
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">{username}</Typography>
              {badge && (
                <Avatar
                  src={getBadgeImageSrc(badge || "")}
                  sx={{ width: "1.25rem", height: "1.25rem" }}
                />
              )}
            </Stack>
            <Typography variant="caption" color={grey[500]}>
              {viewType === "text"
                ? parseDateAbsolute(createdAt)
                : parseDateShort(createdAt)}
            </Typography>
            <Typography variant="caption" color={grey[500]}>
              조회수 {views}
            </Typography>
          </Stack>
        </Box>
      </Base>
      <Divider />
    </Link>
  );
};

export default BoardPostCard;
