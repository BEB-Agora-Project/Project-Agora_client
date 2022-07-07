import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMoreVert,
  MdRefresh,
} from "react-icons/md";
import styled, { css } from "styled-components";
import CommentCard from "../../../components/community/CommentCard";
import Button from "../../../components/common/buttons/Button";
import IconButton from "../../../components/common/buttons/IconButton";
import Divider from "../../../components/common/Divider";
import Textarea from "../../../components/common/inputs/Textarea";
import Menu from "../../../components/common/menus/Menu";
import MenuItem from "../../../components/common/menus/MenuItem";
import Layout from "../../../components/layouts/Layout";
import { useSelector } from "../../../store";
import palette from "../../../styles/palette";
import { theme } from "../../../styles/theme";

interface BaseProps {
  likes: number;
}

const Base = styled.div<BaseProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .contents-top {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }

  .post-detail-community {
    color: ${palette.gray[500]};
  }

  .post-detail-metadata {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
  }

  .post-detail-metadata-left-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .post-detail-metadata-right-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 1.5rem;
    color: ${palette.gray[500]};
  }

  .post-detail-author-profile-image {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  .post-detail-author-name {
    font-weight: 500;
    color: ${palette.gray[700]};
  }

  .post-detail-views {
    font-size: 0.875rem;
    color: ${palette.gray[400]};

    display: none;
  }

  .post-detail-created-at {
    font-size: 0.875rem;
    color: ${palette.gray[400]};
  }

  .post-detail-title {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .post-detail-contents {
    padding: 2rem 0;
    line-height: 1.6;
  }

  .post-detail-likes-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .post-detail-likes {
    font-size: 1.5rem;

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

  .post-detail-chip-wrapper {
    display: flex;
    gap: 0.5rem;
  }

  .post-detail-edit,
  .post-detail-delete {
    cursor: pointer;
  }

  .post-detail-dropdown-icon-wrapper {
    position: relative;
  }

  .post-detail-dropdown {
    top: 2.8rem;
    right: 0rem;
  }

  .comment-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
  }

  .comment-title {
    font-size: 1.5rem;
  }

  .comment-submit-title {
    font-size: 1.25rem; // 20px
    font-weight: 500;
  }

  .comment-submit-button-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    color: ${palette.gray[400]};
  }

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 1rem auto;
    width: 37.5rem;

    .post-detail-views {
      display: block;
    }
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    width: 52.5rem;
  }
`;

const CommunityPostDetail: NextPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [postData, setPostData] = useState({
    postTitle: "",
    postContents: "",
    nickname: "",
    community: "",
    createdAt: "",
    views: 0,
    likes: 0,
  });
  const [commentsData, setCommentsData] = useState<
    {
      comment_nickname: string;
      comment_content: string;
      comment_id: number;
      comment_created_at: string;
    }[]
  >([]);
  const [commentContent, setCommentContent] = useState("");

  const nickname = useSelector((state) => state.user.nickname);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyPost = postData.nickname === nickname;

  const toggleDropdownMenu = () => {
    setDropdownOpen((dropdownOpen) => !dropdownOpen);
  };

  const onChangeCommentContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentContent(event.target.value);
  };

  const onClickEditButton = () => {};

  const onClickDeleteButton = () => {};

  const onClickLikeButton = () => {};

  const onClickDislikeButton = () => {};

  const onClickRefreshButton = () => {};

  const onClickSubmitButton = () => {};

  return (
    <Layout>
      <Base likes={postData.likes}>
        <div className="contents-top">
          <p className="post-detail-community">
            # {postData.community || "게시판 이름"}
          </p>

          <p className="post-detail-title">{postData.postTitle || "글 제목"}</p>
          <div className="post-detail-metadata">
            <div className="post-detail-metadata-left-area">
              <Image
                className="post-detail-author-profile-image"
                width="24px"
                height="24px"
                src="/nonon.png"
                alt=""
              />
              <span className="post-detail-author-name">
                {postData.nickname || "닉네임"}
              </span>
              <span className="post-detail-created-at">
                {postData.createdAt || "0000년 00월 00일 00:00:00"}
              </span>
              <span className="post-detail-views">
                조회수 {postData.views || "1000"}
              </span>
            </div>
            <div className="post-detail-metadata-right-area">
              {isMyPost && (
                <>
                  <p className="post-detail-edit" onClick={onClickEditButton}>
                    수정
                  </p>
                  <Divider orientation="vertical" />
                  <p
                    className="post-detail-delete"
                    onClick={onClickDeleteButton}
                  >
                    삭제
                  </p>
                </>
              )}
              {!isMyPost && (
                <div className="post-detail-dropdown-icon-wrapper">
                  <IconButton onClick={toggleDropdownMenu}>
                    <MdMoreVert size="1.5rem" />
                  </IconButton>
                  {dropdownOpen && (
                    <Menu
                      className="post-detail-dropdown"
                      open={dropdownOpen}
                      onClose={() => setDropdownOpen(false)}
                    >
                      <MenuItem
                        onClick={() =>
                          alert("안타깝지만 신고 기능은 없습니다.")
                        }
                      >
                        신고
                      </MenuItem>
                    </Menu>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <Divider />
        <div className="post-detail-contents">
          {postData.postContents || "글 내용"}
        </div>
        <div className="post-detail-likes-area">
          <IconButton onClick={onClickLikeButton}>
            <MdKeyboardArrowUp size="1.5rem" />
          </IconButton>
          <span className="post-detail-likes">{postData.likes || 1}</span>
          <IconButton onClick={onClickDislikeButton}>
            <MdKeyboardArrowDown size="1.5rem" />
          </IconButton>
        </div>
        <div className="comment-title-wrapper">
          <p className="comment-title">댓글 {commentsData.length || 3}개</p>
          <IconButton onClick={onClickRefreshButton}>
            <MdRefresh size="1.5rem" />
          </IconButton>
        </div>
        {commentsData.map((comment, index) => (
          <CommentCard
            key={index}
            nickname={comment.comment_nickname}
            createdAt={comment.comment_created_at}
            commentContents={comment.comment_content}
            commentId={comment.comment_id}
          />
        ))}
        {isLoggedIn && (
          <>
            <p className="comment-submit-title">댓글 쓰기</p>
            <Textarea
              value={commentContent}
              onChange={onChangeCommentContent}
              placeholder="댓글을 남겨보세요"
              height="6rem"
            />
            <div className="comment-submit-button-wrapper">
              <p>({commentContent.length}/200자)</p>
              <Button variant="contained" onClick={onClickSubmitButton}>
                등록
              </Button>
            </div>
          </>
        )}
      </Base>
    </Layout>
  );
};

export default CommunityPostDetail;
