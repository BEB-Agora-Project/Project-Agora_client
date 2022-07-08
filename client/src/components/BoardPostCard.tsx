import React from "react";
import palette from "../styles/palette";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../styles/theme";
import { Box, Chip, Divider, Typography } from "@mui/material";

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
    background-color: ${palette.gray[100]};
  }

  .post-metadata-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.875rem; // 14px
  }

  .post-metadata {
    display: flex;
    align-items: center;
    gap: 0.5rem; // 8px
  }

  .time,
  .post-views {
    font-size: 0.75rem; // 12px
    color: ${palette.gray[400]};
  }

  .post-title-area-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-chip {
    display: inline-flex;
    margin-right: 0.5rem;
  }

  .post-title {
    color: ${palette.gray[600]};
    cursor: pointer;
    margin-right: 0.5rem;
  }

  .post-likes {
    color: ${palette.blue[500]};

    ${({ likes }) => {
      if (likes > 0) {
        return css`
          color: ${theme.primary};
        `;
      }
      if (likes === 0) {
        return css`
          color: ${palette.black};
        `;
      }
      if (likes < 0) {
        return css`
          color: ${palette.red[500]};
        `;
      }
    }}
  }

  .post-comments {
    color: ${palette.blue[500]};
  }

  .post-author {
    font-size: 0.875rem; // 14px
  }

  ${({ isPopular }) =>
    isPopular &&
    css`
      background-color: ${palette.blue[50]};
      &:hover {
        background-color: ${palette.blue[100]};
      }
    `}

  ${({ viewed }) =>
    viewed &&
    css`
      .post-title {
        color: ${palette.gray[100]};
      }
      .post-comments {
        color: ${palette.blue[200]};
      }
    `}
`;

interface Props {
  postId: number;
  title: string;
  commentCount: number;
  nickname: string;
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
  nickname,
  createdAt,
  isPopular,
  views,
  likes,
  viewed,
}) => {
  return (
    <Link to={`/board/post/${postId}`}>
      <Base isPopular={isPopular} viewed={viewed} likes={likes}>
        <div className="post-title-area-wrapper">
          <div className="post-title-wrapper">
            {isPopular && (
              <Chip className="post-chip" size="small" label="인기" />
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
          </div>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <KeyboardArrowUpIcon sx={{ color: palette.gray[600] }} />
            <span className="post-likes">{likes}</span>
          </Box>
        </div>
        <div className="post-metadata-area">
          <p className="post-metadata">
            <span className="post-author">{nickname}</span>
            <span className="time">{createdAt}</span>
            <span className="post-views">조회수 {views}</span>
          </p>
        </div>
      </Base>
      <Divider />
    </Link>
  );
};

export default BoardPostCard;
