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
  getBadgeImageSrcById,
  parseDateAbsolute,
  parseDateRelative,
  shortenText,
} from "../../lib/utils";
import useMediaQuery from "../../hooks/useMediaQuery";

interface BaseProps {
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
  image?: string;
  viewType?: "image" | "text";
  viewPost?: (id: number) => void;
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
  viewPost,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const onClickPostCard = () => {
    console.log("postcard clicked");
    if (!viewPost) return;
    viewPost(postId);
  };

  return (
    <Link to={`/board/post/${postId}`}>
      <Base isPopular={isPopular} onClick={onClickPostCard}>
        {viewType === "image" && (
          <Avatar
            variant="square"
            src={image}
            sx={{ width: "4rem", height: "4rem", borderRadius: "0.25rem" }}
          />
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
            <Stack direction="row" spacing={0.5}>
              {isPopular && (
                <Chip
                  sx={{ mr: 1, color: "white", bgcolor: theme.primary }}
                  size="small"
                  label="인기"
                />
              )}
              <Typography
                sx={{
                  fontSize: "1rem",
                }}
              >
                {matches ? title : shortenText(title, 25)}
              </Typography>
              {commentCount !== 0 && (
                <Typography
                  component="span"
                  sx={{
                    color: theme.primary,
                  }}
                >
                  [{commentCount}]
                </Typography>
              )}
              {image && viewType === "text" && (
                <ImageIcon
                  sx={{
                    color: grey[400],
                  }}
                />
              )}
            </Stack>
            {likes > 0 && matches && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <KeyboardArrowUpIcon sx={{ color: grey[600] }} />
                <Typography sx={{ color: theme.primary }}>{likes}</Typography>
              </Box>
            )}
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">{username}</Typography>
              {badge && (
                <Avatar
                  src={getBadgeImageSrcById(Number(badge))}
                  sx={{ width: "1.25rem", height: "1.25rem" }}
                />
              )}
            </Stack>
            <Typography variant="caption" color={grey[500]}>
              {viewType === "text"
                ? parseDateAbsolute(createdAt)
                : parseDateRelative(createdAt)}
            </Typography>
            <Typography variant="caption" color={grey[500]}>
              조회수 {views}
            </Typography>
            {!matches && likes > 0 && (
              <Stack direction="row">
                <KeyboardArrowUpIcon sx={{ color: grey[600] }} />
                <Typography sx={{ color: theme.primary }}>{likes}</Typography>
              </Stack>
            )}
          </Stack>
        </Box>
      </Base>
      <Divider />
    </Link>
  );
};

export default BoardPostCard;
