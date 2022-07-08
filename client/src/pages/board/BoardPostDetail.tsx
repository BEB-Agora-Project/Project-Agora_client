import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "../../components/common/Button";
import Textarea from "../../components/common/Textarea";
import Layout from "../../components/Layout";
import CommentCard from "../../components/BoardCommentCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import palette from "../../styles/palette";
import { useLocation, useNavigate } from "react-router-dom";
import ToastViewer from "../../components/ToastViewer";
import { useSelector } from "../../store";
import { FAKE_POST_CONTENTS } from "../../lib/dummyData";
import RefreshIcon from "@mui/icons-material/Refresh";

const Base = styled.div`
  .contents {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .metadata-area {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
  }

  .views,
  .created-at {
    font-size: 0.875rem;
  }

  .metadata-area-left,
  .metadata-area-right {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .likes-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .comment-count-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .submit-comment-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .button {
    height: 4rem;
    font-size: 1.25rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    margin: 0 auto;
    width: 60rem;
  }
`;

const BoardPostDetail: React.FC = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const location = useLocation();

  const onClickLikeButton = () => {};

  const onClickDislikeButton = () => {};

  const onClickEditButton = () => {
    navigate(`${location.pathname}/edit`);
  };

  const onClickDeleteButton = () => {
    window.confirm("삭제하시겠습니까?");
  };

  return (
    <Layout>
      <Base>
        <Paper className="contents" variant="outlined" square>
          <Typography variant="h6" padding="1rem" color={palette.gray[500]}>
            # 게시판 이름
          </Typography>
          <Typography variant="h5" fontWeight={600} padding="1rem" pb="0">
            글 제목
          </Typography>
          <div className="metadata-area">
            <div className="metadata-area-left">
              <Avatar />
              <Typography variant="body1">닉네임</Typography>
              <Typography variant="body2" color={palette.gray[400]}>
                조회수 1
              </Typography>
            </div>
            <div className="metadata-area-right">
              <Typography
                variant="body2"
                onClick={onClickEditButton}
                sx={{ cursor: "pointer" }}
              >
                수정
              </Typography>
              <Typography
                variant="body2"
                onClick={onClickDeleteButton}
                sx={{ cursor: "pointer" }}
              >
                삭제
              </Typography>
            </div>
          </div>
          <Divider />
          <Box padding="1rem">
            <ToastViewer contents={FAKE_POST_CONTENTS} />
          </Box>
          <div className="likes-wrapper">
            <IconButton onClick={onClickLikeButton}>
              <KeyboardArrowUpIcon />
            </IconButton>
            <span className="post-detail-likes">{1}</span>
            <IconButton onClick={onClickDislikeButton}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
          <div className="comment-count-area">
            <Typography variant="h5" fontWeight={600}>
              댓글 2개
            </Typography>
            <IconButton sx={{ width: "2rem", height: "2rem" }}>
              <RefreshIcon />
            </IconButton>
          </div>
          <CommentCard
            nickname="닉네임"
            createdAt="2022년 00월 00일 00:00:00"
            commentContents="댓글 내용"
            commentId={1}
          />
          <CommentCard
            nickname="닉네임"
            createdAt="2022년 00월 00일 00:00:00"
            commentContents="댓글 내용"
            commentId={1}
          />
          <CommentCard
            nickname="닉네임"
            createdAt="2022년 00월 00일 00:00:00"
            commentContents="댓글 내용"
            commentId={1}
          />
          {isLoggedIn && (
            <div className="submit-comment-area">
              <Typography fontWeight={600}>댓글 쓰기</Typography>
              <Textarea height="6rem" />
              <Button className="button">등록</Button>
            </div>
          )}
        </Paper>
      </Base>
    </Layout>
  );
};

export default BoardPostDetail;
