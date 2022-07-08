import React from "react";
import styled, { css } from "styled-components";
import Divider from "../common/Divider";
import Chip from "../common/Chip";
import { theme } from "../../styles/theme";
import Link from "next/link";
import { MdKeyboardArrowUp } from "react-icons/md";
import palette from "../../styles/palette";

interface BaseProps {
  likes: number;
  isPopular?: boolean;
  viewed?: boolean;
}

const Base = styled.div<BaseProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // 8px
  padding: 0.5rem 1rem; // 8px

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

  .post-likes-wrapper {
    display: flex;
    align-items: center;
  }

  .post-likes-icon {
    color: ${palette.gray[600]};
  }

  .post-likes {
    color: ${palette.gray[500]};

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
          color: ${theme.error};
        `;
      }
    }}
  }

  .post-comments {
    color: ${theme.primary};
  }

  .post-author {
    font-size: 0.875rem; // 14px
  }

  ${({ isPopular }) =>
    isPopular &&
    css`
      background-color: ${palette.gray[50]};
      &:hover {
        background-color: ${palette.gray[100]};
      }
    `}

  ${({ viewed }) =>
    viewed &&
    css`
      .post-title {
        color: ${palette.gray[100]};
      }
      .post-comments {
        color: ${palette.gray[200]};
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

const CommunityPostCard: React.FC<Props> = ({
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
    <Link href={`/community/post/${postId}`}>
      <Base isPopular={isPopular} viewed={viewed} likes={likes}>
        <div className="post-title-area-wrapper">
          <div className="post-title-wrapper">
            {isPopular && (
              <Chip className="post-chip" size="small">
                인기
              </Chip>
            )}
            <span className="post-title">{title}</span>
            {commentCount !== 0 && (
              <span className="post-comments">[{commentCount}]</span>
            )}
          </div>
          <div className="post-likes-wrapper">
            <MdKeyboardArrowUp className="post-likes-icon" />
            <span className="post-likes">{likes}</span>
          </div>
        </div>
        <div className="post-metadata-area">
          <p className="post-metadata">
            <span className="post-author">{nickname}</span>
            <span className="time">{createdAt}</span>
            <span className="post-views">조회수 {views}</span>
          </p>
        </div>
        <Divider />
      </Base>
    </Link>
  );
};

export default CommunityPostCard;
