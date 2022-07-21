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
  username: string;
  createdAt: Date;
  commentContents: string | null;
  commentId: number;
  image: string | null;
  refetch: () => void;
}

const BoardCommentCard: React.FC<Props> = ({
  username,
  createdAt,
  commentContents,
  commentId,
  image,
  refetch,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(commentContents);
  const [replyMode, setReplyMode] = useState(false);

  const currentUsername = useSelector((state) => state.user.username);

  const isMyComment = currentUsername === username;

  const onChangeEditText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode((editMode) => !editMode);
  };

  const deleteComment = async () => {
    /*********************** API call **************************/
    try {
      const response = await deleteCommentAPI(commentId);
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
      const response = await updateCommentAPI(commentId, body);
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
            <Avatar sx={{ width: "1.5rem", height: "1.5rem" }} />
            <Typography sx={{ fontWeight: 600 }}>{username}</Typography>
            <Typography variant="body2" color={grey[500]}>
              {parseDateRelative(createdAt)}
            </Typography>
          </Box>
          {isMyComment && (
            <Stack
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              {!image && (
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
        {!editMode && commentContents !== null && (
          <Typography>{commentContents}</Typography>
        )}
        {image && (
          <Avatar src={image} alt="" sx={{ height: "5rem", width: "5rem" }} />
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
          <ReplySubmitCard commentId={commentId} refetch={refetch} />
        </>
      )}
      {/* <Divider /> */}
      {/* <ReplyCard
        username="노논"
        createdAt={new Date()}
        contents="나나나"
        refetch={refetch}
      /> */}
    </>
  );
};

export default BoardCommentCard;
