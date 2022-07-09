import React, { useState } from "react";
import styled from "@emotion/styled";
import palette from "../styles/palette";
import Button from "./common/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Textarea from "./common/Textarea";
import { useSelector } from "../store";
import { grey } from "@mui/material/colors";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

interface Props {
  username: string;
  createdAt: string;
  commentContents: string;
  commentId: number;
  refresh?: () => void;
}

const CommentCard: React.FC<Props> = ({
  username,
  createdAt,
  commentContents,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(commentContents);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isMyComment = isLoggedIn;

  const onChangeEditText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode((editMode) => !editMode);
  };

  const onClickDeleteButton = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
    }
  };

  const onClickSubmitButton = async () => {
    if (editText.length > 200) {
      alert("댓글 길이 제한 수를 초과하였습니다.");
      return;
    }
  };

  return (
    <Base>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Avatar sx={{ width: "24px", height: "24px" }} />
          <Typography>{username}</Typography>
          <Typography variant="body2" color={palette.gray[400]}>
            {createdAt}
          </Typography>
        </Box>
        {isMyComment && (
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
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
        {!isMyComment && (
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        )}
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
              gap: "1rem",
            }}
          >
            <Typography color={grey[500]}>({editText.length}/200자)</Typography>
            <Button variant="contained" onClick={onClickSubmitButton}>
              수정하기
            </Button>
          </Box>
        </>
      )}
      {!editMode && <Typography>{commentContents}</Typography>}
    </Base>
  );
};

export default CommentCard;
