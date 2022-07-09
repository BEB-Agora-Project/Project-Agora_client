import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import CommentCard from "../../components/BoardCommentCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";
import ToastViewer from "../../components/ToastViewer";
import { useSelector } from "../../store";
import { FAKE_POST_CONTENTS } from "../../lib/dummyData";
import RefreshIcon from "@mui/icons-material/Refresh";
import LoginPromtModal from "../../components/LoginPromtModal";
import PostDetailMoreButton from "../../components/PostDetailMoreButton";
import BoardCommentSubmit from "../../components/BoardCommentSubmit";
import { grey } from "@mui/material/colors";

interface BaseProps {
  likes: number;
}

const Base = styled.div<BaseProps>`
  .contents {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .metadata-wrapper {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    margin: 0 auto;
    width: 60rem;

    .metadata-wrapper {
      flex-direction: row;
      gap: 1rem;
    }
  }
`;

const BoardPostDetail: React.FC = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyPost = isLoggedIn;

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

  const onClickSubmitButton = () => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }
  };

  const getLikesTextColor = (likes: number) => {
    if (likes > 0) {
      return theme.primary;
    }

    if (likes < 0) {
      return theme.error;
    }
  };

  return (
    <Layout>
      {loginModalOpen && (
        <LoginPromtModal
          open={loginModalOpen}
          onClose={() => setLoginModalOpen(false)}
        />
      )}
      <Base likes={1}>
        <Paper className="contents" variant="outlined" square>
          <Typography variant="h5" padding="1rem" color={grey[500]}>
            # 게시판 이름
          </Typography>
          <Typography variant="h5" fontWeight={600} padding="1rem" pb="0">
            글 제목
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              p: "1rem",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar />
              <Box className="metadata-wrapper">
                <Typography variant="body1">닉네임</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography variant="body2" color={grey[500]}>
                    2022.07.09 14:01
                  </Typography>
                  <Typography variant="body2" color={grey[500]}>
                    조회수 1
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              {isMyPost && (
                <Stack
                  direction="row"
                  spacing={2}
                  divider={<Divider orientation="vertical" flexItem />}
                >
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
                </Stack>
              )}
              {!isMyPost && <PostDetailMoreButton postId={1} />}
            </Stack>
          </Box>
          <Divider />
          <Box sx={{ padding: "1rem" }}>
            <ToastViewer contents={FAKE_POST_CONTENTS} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <IconButton onClick={onClickLikeButton}>
              <KeyboardArrowUpIcon />
            </IconButton>
            <Typography variant="h6" color={getLikesTextColor(1)}>
              {1}
            </Typography>
            <IconButton onClick={onClickDislikeButton}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "1rem",
            }}
          >
            <Typography variant="h6">댓글 2개</Typography>
            <IconButton sx={{ width: "2rem", height: "2rem" }}>
              <RefreshIcon />
            </IconButton>
          </Box>
          <CommentCard
            username="닉네임"
            createdAt="1시간 전"
            commentContents="댓글 내용"
            commentId={1}
          />
          <BoardCommentSubmit onClickSubmitButton={onClickSubmitButton} />
        </Paper>
      </Base>
    </Layout>
  );
};

export default BoardPostDetail;
