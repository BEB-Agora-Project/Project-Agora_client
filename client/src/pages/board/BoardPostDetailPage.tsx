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
import ToastViewer from "../../components/toast-editor/ToastViewer";
import { useSelector } from "../../store";
import RefreshIcon from "@mui/icons-material/Refresh";
import PostDetailMoreButton from "../../components/board/PostDetailMoreButton";
import BoardCommentSubmit from "../../components/board/BoardCommentSubmit";
import { grey } from "@mui/material/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import PaperLayout from "../../components/layout/PaperLayout";
import usePromtLogin from "../../hooks/usePromptLogin";
import {
  deletePostAPI,
  dislikePostAPI,
  getCommentListAPI,
  getPostDetailAPI,
  likePostAPI,
  submitCommentAPI,
} from "../../lib/api/board";

const Base = styled.div``;

const BoardPostDetail: React.FC = () => {
  const [postDetail, setPostDetail] = useState<PostDetailType>();
  const [commentList, setCommentList] = useState<GetCommentListResponseType>(
    []
  );
  const [commentTextarea, setCommentTextarea] = useState("");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyPost = isLoggedIn;

  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  const navigate = useNavigate();
  const promtLogin = usePromtLogin();
  const location = useLocation();
  console.log(location);
  const params = useParams();
  const postId = Number(params.id);
  console.log(postDetail?.content);

  const onChangeCommentTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentTextarea(event.target.value);
  };

  const fetchPostDetail = useCallback(async () => {
    try {
      const response = await getPostDetailAPI(postId);
      console.log(response);
      setPostDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const fetchCommentList = useCallback(async () => {
    try {
      const response = await getCommentListAPI(postId);
      console.log("@@@ commentList @@@");
      console.log(response);
      setCommentList(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const likePost = async () => {
    try {
      const response = await likePostAPI(postId);
      console.log(response);
      fetchPostDetail();
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async () => {
    try {
      const response = await dislikePostAPI(postId);
      console.log(response);
      fetchPostDetail();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickLikeButton = () => {
    likePost();
  };

  const onClickDislikeButton = () => {
    dislikePost();
  };

  const onClickEditButton = () => {
    navigate(`${location.pathname}/edit`);
  };

  const deletePost = useCallback(async () => {
    try {
      const response = await deletePostAPI(postId);
      console.log(response);
      navigate(`/board/${postDetail?.board_id}`);
    } catch (error) {
      console.log(error);
    }
  }, [postId, navigate, postDetail?.board_id]);

  const onClickDeleteButton = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deletePost();
    }
  };

  const submitComment = async () => {
    try {
      const body = {
        content: commentTextarea,
      };

      const response = await submitCommentAPI(postId, body);
      console.log(response);
      fetchCommentList();
      setCommentTextarea("");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmitButton = () => {
    if (!isLoggedIn) return promtLogin();

    submitComment();
  };

  const getLikesTextColor = (likes: number) => {
    if (likes > 0) {
      return theme.primary;
    }

    if (likes < 0) {
      return theme.error;
    }
  };

  useEffect(() => {
    fetchPostDetail();
    fetchCommentList();
  }, [fetchPostDetail, fetchCommentList]);

  return (
    <>
      <Base>
        <PaperLayout width="48rem">
          <Typography
            variant="h6"
            color={theme.primaryDimmed}
            sx={{ p: 2, mt: 2, cursor: "pointer" }}
          >
            # {postDetail?.Board.boardname}
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
                  {postDetail?.User.username}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography variant="body2" color={grey[500]}>
                    {postDetail?.createdAt.toString()}
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
          <Box sx={{ padding: "1rem" }}>
            {postDetail?.content && (
              <ToastViewer contents={postDetail?.content} />
            )}
          </Box>
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
              <Typography variant="h6" color={getLikesTextColor(1)}>
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
                {postDetail?.down}
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
            <Typography variant="h5">댓글 {commentList.length}개</Typography>
            <IconButton sx={{ width: "2rem", height: "2rem" }}>
              <RefreshIcon />
            </IconButton>
          </Box>
          {commentList.map((comment, index) => (
            <CommentCard
              key={index}
              username={comment?.User?.username}
              createdAt={comment?.createdAt.toString()}
              commentContents={comment?.content}
              commentId={comment?.id}
              refetch={fetchCommentList}
            />
          ))}
          <Divider />
          <BoardCommentSubmit
            isLoggedIn={isLoggedIn}
            onClickSubmitButton={onClickSubmitButton}
            commentTextarea={commentTextarea}
            onChangeCommentTextarea={onChangeCommentTextarea}
          />
        </PaperLayout>
      </Base>
    </>
  );
};

export default BoardPostDetail;
