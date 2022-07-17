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
import { parseDateAbsolute } from "../../lib/utils";
import EmptyCommentNotification from "../../components/layout/EmptyCommentNotification";
import SharePostButtonGroup from "../../components/board/SharePostButtonGroup";

const Base = styled.div``;

const BoardPostDetail: React.FC = () => {
  const [postDetail, setPostDetail] = useState<PostDetailType>();
  const [commentList, setCommentList] = useState<GetCommentListResponseType>(
    []
  );
  const [commentTextarea, setCommentTextarea] = useState("");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyPost = isLoggedIn;

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
    /*********************** API call **************************/
    try {
      const response = await getPostDetailAPI(postId);
      console.log(response);
      setPostDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const fetchCommentList = useCallback(async () => {
    /*********************** API call **************************/
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
    /*********************** API call **************************/
    try {
      const response = await likePostAPI(postId);
      console.log(response);
      fetchPostDetail();
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async () => {
    /*********************** API call **************************/
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

  const onClickBoardname = () => {
    navigate(`/board/${postDetail?.board_id}`);
  };

  const deletePost = useCallback(async () => {
    /*********************** API call **************************/
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
    /*********************** API call **************************/
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

  useEffect(() => {
    fetchPostDetail();
    fetchCommentList();
  }, [fetchPostDetail, fetchCommentList]);

  return (
    <>
      <Base>
        <PaperLayout>
          <Typography
            variant="body1"
            color={theme.primaryDimmed}
            sx={{ px: 2, mt: 4, cursor: "pointer" }}
            onClick={onClickBoardname}
          >
            # {postDetail?.Board.boardname}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, px: 2 }}>
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
              <Stack>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {postDetail?.User.username}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography variant="body2" color={grey[500]}>
                    {parseDateAbsolute(postDetail?.createdAt)}
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
              pt: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="h6" color={theme.primary}>
                {postDetail?.up}
              </Typography>
              <IconButton
                sx={{ bgcolor: grey[50] }}
                onClick={onClickLikeButton}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: "2px", height: "20px", bgcolor: grey[100] }} />
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
          <SharePostButtonGroup />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "1rem",
            }}
          >
            <Box display="inline-flex" gap={1}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                댓글
              </Typography>
              <Stack direction="row">
                <Typography variant="h6" color={theme.primary}>
                  {commentList.length}개
                </Typography>
              </Stack>
            </Box>
            <IconButton sx={{ width: "2rem", height: "2rem" }}>
              <RefreshIcon />
            </IconButton>
          </Box>
          {commentList.map((comment, index) => (
            <CommentCard
              key={index}
              username={comment?.User?.username}
              createdAt={comment?.createdAt}
              commentContents={comment?.content}
              commentId={comment?.id}
              refetch={fetchCommentList}
            />
          ))}
          <Divider />
          {commentList.length === 0 && (
            <>
              <EmptyCommentNotification />
              <Divider />
            </>
          )}
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
