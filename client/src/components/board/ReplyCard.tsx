import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { getBadgeImageSrcById, parseDateRelative } from "../../lib/utils";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { useSelector } from "../../store";
import ReplyCardMoreButton from "./ReplyCardMoreButton";
import { deleteReplyAPI, updateReplyAPI } from "../../lib/api/board";
import LoadingButton from "../common/LoadingButton";

interface Props {
  replyDetail: ReplyDetailType;
  refetch: () => void;
}

const ReplyCard: React.FC<Props> = ({ replyDetail, refetch }) => {
  const { User, content: contents, created_at: createdAt } = replyDetail;
  const { username, badge } = User;

  const [isLoading, setIsLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(contents);

  const currentUsername = useSelector((state) => state.user.username);

  const isMyReply = currentUsername === username;

  const onChangeEditText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode((editMode) => !editMode);
  };

  const onClickDeleteButton = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    try {
      const response = await deleteReplyAPI(replyDetail.id);
      console.log("ReplyCard.tsx | deleteReplyAPI response");
      console.log(response);
      refetch();
    } catch (error) {
      console.log("ReplyCard.tsx | deleteReplyAPI error");
      console.log(error);
    }
  };

  const onClickSubmitButton = async () => {
    setIsLoading(true);
    try {
      const body = {
        content: editText,
      };
      const response = await updateReplyAPI(replyDetail.id, body);
      console.log("ReplyCard.tsx | updateReplyAPI response");
      console.log(response);
      refetch();
      setEditMode(false);
      setIsLoading(false);
    } catch (error) {
      console.log("ReplyCard.tsx | updateReplyAPI error");
      console.log(error);
    }
  };

  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          bgcolor: grey[100],
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography sx={{ fontWeight: 800, color: grey[500] }}>
              ㄴ
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Typography sx={{ fontWeight: 600 }}>{username}</Typography>
              {badge && (
                <Avatar
                  src={getBadgeImageSrcById(Number(badge))}
                  sx={{ width: "1.25rem", height: "1.25rem" }}
                />
              )}
            </Stack>
            <Typography variant="body2" color={grey[500]}>
              {parseDateRelative(createdAt)}
            </Typography>
          </Box>
          {isMyReply && (
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                onClick={onClickEditButton}
              >
                {editMode ? "취소" : "수정"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                onClick={onClickDeleteButton}
              >
                삭제
              </Typography>
            </Stack>
          )}
          {!isMyReply && <ReplyCardMoreButton ReplyId={11111} />}
        </Box>
        {editMode && (
          <>
            <Textarea
              className="edit-textarea"
              value={editText}
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
                ({editText.length}/200자)
              </Typography>
              {isLoading && <LoadingButton width="6rem" />}
              {!isLoading && (
                <Button variant="contained" onClick={onClickSubmitButton}>
                  수정하기
                </Button>
              )}
            </Box>
          </>
        )}
        {!editMode && <Typography>{contents}</Typography>}
      </Box>
    </>
  );
};

export default ReplyCard;
