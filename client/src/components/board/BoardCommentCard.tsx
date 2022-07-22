import React, { useState } from "react";
import Button from "../common/Button";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import Textarea from "../common/Textarea";
import { useSelector } from "../../store";
import { grey } from "@mui/material/colors";
import { deleteCommentAPI, updateCommentAPI } from "../../lib/api/board";
import { parseDateRelative } from "../../lib/utils";
import ForumIcon from "@mui/icons-material/Forum";
import ReplySubmitCard from "./ReplySubmitCard";
import ReplyCard from "./ReplyCard";
import CommentCardMoreButton from "./CommentCardMoreButton";

interface Props {
  commentDetail: CommentDetailType;
  refetch: () => void;
}

const BoardCommentCard: React.FC<Props> = ({ commentDetail, refetch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(commentDetail?.content);
  const [replyMode, setReplyMode] = useState(false);

  const currentUsername = useSelector((state) => state.user.username);

  const isMyComment = currentUsername === commentDetail.User.username;

  const onChangeEditText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode((editMode) => !editMode);
  };

  const deleteComment = async () => {
    /*********************** API call **************************/
    try {
      const response = await deleteCommentAPI(commentDetail.id);
      console.log(response);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDeleteButton = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteComment();
    }
  };

  const onClickReplyButton = () => {
    setReplyMode((replyMode) => !replyMode);
  };

  const updateComment = async () => {
    /*********************** API call **************************/
    try {
      const body = {
        content: editText || "",
      };
      const response = await updateCommentAPI(commentDetail.id, body);
      console.log("BoardCommentCard.tsx | updateCommentAPI response");
      console.log(response);
      setEditMode(false);
      refetch();
    } catch (error) {
      console.log("BoardCommentCard.tsx | updateCommentAPI error");
      console.log(error);
    }
  };

  const onClickSubmitButton = () => {
    if (editText && editText.length > 200)
      return alert("댓글 길이 제한 수를 초과하였습니다.");

    if (editText && editText.length === 0) return alert("내용을 입력해주세요.");

    updateComment();
  };

  return (
    <>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Avatar
              src={commentDetail.User.profile_image || undefined}
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                border: `1px solid ${grey[200]}`,
              }}
            />
            <Typography sx={{ fontWeight: 600 }}>
              {commentDetail.User.username}
            </Typography>
            <Typography variant="body2" color={grey[500]}>
              {parseDateRelative(commentDetail.createdAt)}
            </Typography>
          </Box>
          {isMyComment && (
            <Stack
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              {!commentDetail?.image && (
                <Typography
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                  onClick={onClickEditButton}
                >
                  {editMode ? "취소" : "수정"}
                </Typography>
              )}
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                onClick={onClickDeleteButton}
              >
                삭제
              </Typography>
            </Stack>
          )}
          {!isMyComment && <CommentCardMoreButton commentId={1111} />}
        </Box>
        {editMode && (
          <>
            <Textarea
              className="edit-textarea"
              value={editText || ""}
              onChange={onChangeEditText}
              height="6rem"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography color={grey[500]}>
                ({editText && editText.length}/200자)
              </Typography>
              <Button variant="contained" onClick={onClickSubmitButton}>
                수정하기
              </Button>
            </Box>
          </>
        )}
        {!editMode && commentDetail?.content && (
          <Typography>{commentDetail?.content}</Typography>
        )}
        {commentDetail.image && (
          <Avatar
            src={commentDetail.image}
            alt=""
            sx={{ height: "5rem", width: "5rem" }}
          />
        )}
        <Stack direction="row">
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onClickReplyButton}
          >
            <ForumIcon
              sx={{ width: "1.25rem", height: "1.25rem", color: grey[500] }}
            />
            <Typography variant="body2">답글 쓰기</Typography>
          </Box>
        </Stack>
      </Box>
      {replyMode && (
        <>
          <Divider />
          <ReplySubmitCard
            commentId={commentDetail.id}
            setReplyMode={setReplyMode}
            refetch={refetch}
          />
        </>
      )}
      {commentDetail.Replies.map((reply, index) => (
        <ReplyCard key={index} replyDetail={reply} refetch={refetch} />
      ))}
    </>
  );
};

export default BoardCommentCard;
