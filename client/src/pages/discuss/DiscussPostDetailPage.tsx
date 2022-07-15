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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "../../store";
import RefreshIcon from "@mui/icons-material/Refresh";
import PostDetailMoreButton from "../../components/board/PostDetailMoreButton";
import { grey } from "@mui/material/colors";
import useMediaQuery from "../../hooks/useMediaQuery";
import PaperLayout from "../../components/layout/PaperLayout";
import usePromtLogin from "../../hooks/usePromptLogin";
import {
  dislikeDiscussPostAPI,
  getDiscussCommentListAPI,
  getDiscussPostDetailAPI,
  likeDiscussPostAPI,
  submitDiscussCommentAPI,
} from "../../lib/api/discuss";
import DiscussCommentSubmit from "../../components/discuss/DiscussCommentSubmit";
import { parseDateAbsolute } from "../../lib/utils";
import DiscussCommentCard from "../../components/discuss/DiscussCommentCard";

const Base = styled.div``;

const BoardPostDetail: React.FC = () => {
  const [postDetail, setPostDetail] =
    useState<GetDiscussPostDetailAPIResponseType>();
  const [commentList, setCommentList] =
    useState<GetDiscussCommentListAPIResponseType>([]);
  const [commentTextarea, setCommentTextarea] = useState("");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyPost = isLoggedIn;

  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  const navigate = useNavigate();
  const promtLogin = usePromtLogin();
  const location = useLocation();
  const params = useParams();

  const postId = Number(params.id);

  const fetchDiscussPostDetail = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getDiscussPostDetailAPI(postId);
      console.log(response.data);
      setPostDetail(response.data);
      console.log(typeof response.data.createdAt);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const fetchDiscussCommentList = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getDiscussCommentListAPI(postId);
      console.log(response);
      setCommentList(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const likeDiscussPost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await likeDiscussPostAPI(postId);
      console.log(response);
      fetchDiscussPostDetail();
    } catch (error) {
      console.log(error);
    }
  }, [fetchDiscussPostDetail, postId]);

  const dislikeDiscussPost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await dislikeDiscussPostAPI(postId);
      console.log(response);
      fetchDiscussPostDetail();
    } catch (error) {
      console.log(error);
    }
  }, [fetchDiscussPostDetail, postId]);

  const submitComment = async () => {
    /*********************** API call **************************/
    try {
      const body = {
        content: commentTextarea,
      };
      const response = await submitDiscussCommentAPI(postId, body);
      console.log(response);
      setCommentTextarea("");
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCommentTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentTextarea(event.target.value);
  };

  const onClickLikeButton = () => {
    likeDiscussPost();
  };

  const onClickDislikeButton = () => {
    dislikeDiscussPost();
  };

  const onClickEditButton = () => {
    navigate(`${location.pathname}/edit`);
  };

  const onClickDeleteButton = () => {
    window.confirm("삭제하시겠습니까?");
  };

  const onClickSubmitButton = async () => {
    if (!isLoggedIn) promtLogin();

    await submitComment();
    fetchDiscussCommentList();
  };

  useEffect(() => {
    fetchDiscussPostDetail();
    fetchDiscussCommentList();
  }, [fetchDiscussPostDetail, fetchDiscussCommentList]);

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
            <DiscussCommentCard
              key={index}
              username={comment.User.username}
              createdAt={comment.createdAt}
              commentContents={comment.content}
              commentId={comment.id}
              refetch={fetchDiscussCommentList}
            />
          ))}
          <Divider />
          <DiscussCommentSubmit
            isLoggedIn={isLoggedIn}
            onClickSubmitButton={onClickSubmitButton}
            onChangeCommentTextarea={onChangeCommentTextarea}
            commentTextarea={commentTextarea}
          />
        </PaperLayout>
      </Base>
    </>
  );
};

export default BoardPostDetail;
