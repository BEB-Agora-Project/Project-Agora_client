import React, { useCallback, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../store";
import BoardCommentSubmit from "../../components/board/BoardCommentSubmit";
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
import SharePostButtonGroup from "../../components/board/SharePostButtonGroup";
import PostNotFoundPage from "./PostNotFoundPage";
import { modalActions } from "../../store/modalSlice";
import LoadingPage from "../LoadingPage";
import EmojiCommentModal from "../../components/modals/EmojiCommentModal";
import BoardPostDetailTitle from "../../components/board/BoardPostDetailTitle";
import BoardPostDetailProfile from "../../components/board/BoardPostDetailProfile";
import BoardPostDetailContents from "../../components/board/BoardPostDetailContents";
import BoardPostDetailLike from "../../components/board/BoardPostDetailLike";
import BoardPostDetailCommentCount from "../../components/board/BoardPostDetailCommentCount";
import BoardPostDetailComment from "../../components/board/BoardPostDetailComment";
import { scrollToTop } from "../../lib/utils";
import useCommentSort from "../../hooks/useCommentSort";
import {
  dislikeDiscussPostAPI,
  likeDiscussPostAPI,
} from "../../lib/api/discuss";

const BoardPostDetailPage: React.FC = () => {
  const [postDetail, setPostDetail] = useState<PostDetailType>();
  const [commentList, setCommentList] = useState<GetCommentListResponseType>(
    []
  );
  const [commentTextarea, setCommentTextarea] = useState("");
  const [isDeletedPost, setIsDeletedPost] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [refetchCommentButtonDisabled, setRefetchCommentButtonDisabled] =
    useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const currentUsername = useSelector((state) => state.user.username);

  const { commentSort, setCommentSort } = useCommentSort();
  const navigate = useNavigate();
  const promtLogin = usePromtLogin();
  const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();

  const isMyPost = currentUsername === postDetail?.User.username;
  const postId = Number(params.id);

  const fetchPostDetail = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getPostDetailAPI(postId);
      console.log("BoardPostDetailPage.tsx | getPostDetailAPI response");
      console.log(response);
      setPostDetail(response.data.data);
    } catch (error) {
      console.log("BoardPostDetailPage.tsx | getPostDetailAPI error");
      console.log(error);
      setIsDeletedPost(true);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  const fetchCommentList = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getCommentListAPI(postId);
      console.log("BoardPostDetailPage.tsx | getCommentListAPI response");
      console.log(response);
      setCommentList(response.data);
    } catch (error) {
      console.log("BoardPostDetailPage.tsx | getCommentListAPI error");
      console.log(error);
    }
  }, [postId]);

  const likePost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await likePostAPI(postId);
      console.log("BoardPostDetailPage.tsx | likePostAPI response");
      console.log(response);
      fetchPostDetail();
    } catch (error: any) {
      console.log("BoardPostDetailPage.tsx | likePostAPI error");
      console.log(error);
      if (error.response.status === 409) {
        alert("이미 추천 혹은 비추천한 게시글입니다.");
      }
    }
  }, [fetchPostDetail, postId]);

  const dislikePost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await dislikePostAPI(postId);
      console.log("BoardPostDetailPage.tsx | dislikePostAPI response");
      console.log(response);
      fetchPostDetail();
    } catch (error: any) {
      console.log("BoardPostDetailPage.tsx | dislikePostAPI error");
      if (error.response.status === 409) {
        alert("이미 추천 혹은 비추천한 게시글입니다.");
      }
      console.log(error);
    }
  }, [fetchPostDetail, postId]);

  const likeDiscussPost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await likeDiscussPostAPI(postId);
      console.log("BoardPostDetailPage.tsx | likeDiscussPostAPI response");
      console.log(response);
      fetchPostDetail();
    } catch (error) {
      console.log("BoardPostDetailPage.tsx | likeDiscussPostAPI error");
      console.log(error);
    }
  }, [fetchPostDetail, postId]);

  const dislikeDiscussPost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await dislikeDiscussPostAPI(postId);
      console.log("BoardPostDetailPage.tsx | dislikeDiscussPostAPI response");
      console.log(response);
      fetchPostDetail();
    } catch (error) {
      console.log("BoardPostDetailPage.tsx | dislikeDiscussPostAPI error");
      console.log(error);
    }
  }, [fetchPostDetail, postId]);

  const submitComment = useCallback(async () => {
    setIsSubmitLoading(true);
    /*********************** API call **************************/
    try {
      const body = {
        content: commentTextarea,
        image: null,
      };

      const response = await submitCommentAPI(postId, body);
      console.log("BoardPostDetailPage.tsx | submitCommentAPI response");
      console.log(response);
      fetchCommentList();
      setCommentTextarea("");
      setIsSubmitLoading(false);
    } catch (error) {
      console.log("BoardPostDetailPage.tsx | submitCommentAPI error");
      console.log(error);
    }
  }, [commentTextarea, fetchCommentList, postId]);

  const deletePost = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await deletePostAPI(postId);
      console.log("BoardPostDetailPage.tsx | deletePostAPI response");
      console.log(response);
      navigate(`/board/${postDetail?.board_id}`);
    } catch (error) {
      console.log("BoardPostDetailPage.tsx | deletePostAPI error");
      console.log(error);
    }
  }, [postId, navigate, postDetail?.board_id]);

  const onChangeCommentTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentTextarea(event.target.value);
  };

  const onClickLikeButton = () => {
    if (!isLoggedIn) return promtLogin();

    if (!postDetail?.Board.boardname) likeDiscussPost();
    if (postDetail?.Board.boardname) likePost();
  };

  const onClickDislikeButton = () => {
    if (!isLoggedIn) return promtLogin();

    if (!postDetail?.Board.boardname) dislikeDiscussPost();
    if (postDetail?.Board.boardname) dislikePost();
  };

  const onClickEditButton = () => {
    navigate(`${location.pathname}/edit`);
  };

  const onClickBoardname = () => {
    navigate(`/board/${postDetail?.board_id}`);
  };

  const onClickEmojiCommentButton = () => {
    if (!isLoggedIn) return promtLogin();

    dispatch(modalActions.setIsEmojiCommentModalOpen(true));
  };

  const onClickDeleteButton = () => {
    const confirm = window.confirm("삭제하시겠습니까?");
    if (confirm === true) {
      deletePost();
    }
  };

  const onClickSubmitButton = () => {
    if (!isLoggedIn) return promtLogin();

    submitComment();
  };

  const onClickRefetchCommentButton = () => {
    setRefetchCommentButtonDisabled(true);
    fetchCommentList();
    setTimeout(() => {
      setRefetchCommentButtonDisabled(false);
    }, 2000);
  };

  const fetchPostDetailPageData = useCallback(async () => {
    await fetchPostDetail();
    await fetchCommentList();
  }, [fetchPostDetail, fetchCommentList]);

  useEffect(() => {
    fetchPostDetailPageData();
  }, [fetchPostDetailPageData]);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (isDeletedPost) {
    return <PostNotFoundPage />;
  }

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <EmojiCommentModal postId={postId} refetch={fetchCommentList} />
      <PaperLayout>
        <BoardPostDetailTitle
          postDetail={postDetail}
          onClickBoardname={onClickBoardname}
        />
        <BoardPostDetailProfile
          postDetail={postDetail}
          onClickEditButton={onClickEditButton}
          onClickDeleteButton={onClickDeleteButton}
          isMyPost={isMyPost}
        />
        <Divider />
        <BoardPostDetailContents postDetail={postDetail} />
        <BoardPostDetailLike
          postDetail={postDetail}
          onClickLikeButton={onClickLikeButton}
          onClickDislikeButton={onClickDislikeButton}
        />
        <SharePostButtonGroup />
        <BoardPostDetailCommentCount
          commentList={commentList}
          commentSort={commentSort}
          setCommentSort={setCommentSort}
          onClickRefetchCommentButton={onClickRefetchCommentButton}
          refetchCommentButtonDisabled={refetchCommentButtonDisabled}
        />
        <BoardPostDetailComment
          commentList={commentList}
          commentSort={commentSort}
          fetchCommentList={fetchCommentList}
        />
        <BoardCommentSubmit
          isLoading={isSubmitLoading}
          isLoggedIn={isLoggedIn}
          onClickSubmitButton={onClickSubmitButton}
          commentTextarea={commentTextarea}
          onChangeCommentTextarea={onChangeCommentTextarea}
          onClickEmojiCommentButton={onClickEmojiCommentButton}
        />
      </PaperLayout>
    </>
  );
};

export default React.memo(BoardPostDetailPage);
