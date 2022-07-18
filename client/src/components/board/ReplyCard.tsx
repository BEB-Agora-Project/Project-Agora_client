import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { parseDateRelative } from "../../lib/utils";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Textarea from "../common/Textarea";
import Button from "../common/Button";

interface Props {
  username: string;
  createdAt: Date;
  contents: string;
}

const ReplyCard: React.FC<Props> = ({ username, createdAt, contents }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(contents);

  const isMyComment = true;

  const onChangeEditText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode((editMode) => !editMode);
  };

  const onClickDeleteButton = () => {
    // api call
  };

  const onClickSubmitButton = () => {
    // api call
  };

  return (
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
          <Typography sx={{ fontWeight: 800, color: grey[500] }}>ㄴ</Typography>
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
              gap: 2,
            }}
          >
            <Typography color={grey[500]}>({editText.length}/200자)</Typography>
            <Button variant="contained" onClick={onClickSubmitButton}>
              수정하기
            </Button>
          </Box>
        </>
      )}
      {!editMode && <Typography>{contents}</Typography>}
    </Box>
  );
};

export default ReplyCard;
