import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CommentCard from "../../components/board/BoardCommentCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "../../store";
import RefreshIcon from "@mui/icons-material/Refresh";
import PostDetailMoreButton from "../../components/board/PostDetailMoreButton";
import BoardCommentSubmit from "../../components/board/BoardCommentSubmit";
import { grey } from "@mui/material/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import PaperLayout from "../../components/layout/PaperLayout";
import usePromtLogin from "../../hooks/usePromptLogin";
import { getDiscussPostDetailAPI } from "../../lib/api/discuss";

const Base = styled.div``;

const BoardPostDetail: React.FC = () => {
  const [postDetail, setPostDetail] =
    useState<GetDiscussPostDetailResponseType>();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyPost = isLoggedIn;

  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  const navigate = useNavigate();
  const promtLogin = usePromtLogin();
  const location = useLocation();
  const params = useParams();

  const postId = params.id;

  const onClickLikeButton = () => {};

  const onClickDislikeButton = () => {};

  const onClickEditButton = () => {
    navigate(`${location.pathname}/edit`);
  };

  const onClickDeleteButton = () => {
    window.confirm("삭제하시겠습니까?");
  };

  const onClickSubmitButton = () => {
    promtLogin();
  };

  const getLikesTextColor = (likes: number) => {
    if (likes > 0) {
      return theme.primary;
    }

    if (likes < 0) {
      return theme.error;
    }
  };

  const fetchDiscussPostDetail = useCallback(async () => {
    try {
      const response = await getDiscussPostDetailAPI(Number(postId));
      console.log(response.data);
      setPostDetail(response.data);
      console.log(typeof response.data.createdAt);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  useEffect(() => {
    fetchDiscussPostDetail();
  }, [fetchDiscussPostDetail]);

  return (
    <>
      <Base>
        <PaperLayout width="48rem">
          <Typography
            variant="h6"
            color={theme.primaryDimmed}
            sx={{ p: 2, mt: 2, cursor: "pointer" }}
          >
            # 게시판 제목 ({postId}번 글)
          </Typography>
          <Typography variant="h4" padding="0 1rem" sx={{ fontWeight: 600 }}>
            {postDetail?.title}
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
              <Stack
                direction={matches ? "row" : "column"}
                spacing={matches ? 1 : 0}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {postDetail?.User?.username || "닉네임"}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography variant="body2" color={grey[500]}>
                    2022년 7월 12일 00:00:00
                  </Typography>
                  <Typography variant="body2" color={grey[500]}>
                    조회수 {postDetail?.hit}
                  </Typography>
                </Stack>
              </Stack>
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
          <Box sx={{ padding: "1rem" }}>{postDetail?.content}</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                color={getLikesTextColor(postDetail?.up || 0)}
              >
                {postDetail?.up}
              </Typography>
              <IconButton
                sx={{ bgcolor: grey[50] }}
                onClick={onClickLikeButton}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton
                sx={{ bgcolor: grey[50] }}
                onClick={onClickDislikeButton}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
              <Typography variant="h6" color={theme.error}>
                {0}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "1rem",
            }}
          >
            <Typography variant="h5">댓글 2개</Typography>
            <IconButton sx={{ width: "2rem", height: "2rem" }}>
              <RefreshIcon />
            </IconButton>
          </Box>
          <CommentCard
            username="닉네임"
            createdAt="1시간 전"
            commentContents="댓글 내용"
            commentId={1}
            refetch={() => {}}
          />
          <Divider />
          <BoardCommentSubmit
            isLoggedIn={isLoggedIn}
            onClickSubmitButton={onClickSubmitButton}
          />
        </PaperLayout>
      </Base>
    </>
  );
};

export default BoardPostDetail;
