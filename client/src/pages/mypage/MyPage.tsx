import React, { useState } from "react";
import styled from "@emotion/styled";
import PaperLayout from "../../components/layout/PaperLayout";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CreateIcon from "@mui/icons-material/Create";
import BoardPostCard from "../../components/board/BoardPostCard";
import { FAKE_ARRAY } from "../../lib/dummyData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const Base = styled.div``;

const Mypage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  const onClickEditButton = () => {
    setEditMode(true);
  };

  const onClickCancelButton = () => {
    setEditMode(false);
  };

  const onClickSubmitButton = () => {};

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box sx={boxStyle}>
          <Stack sx={{ alignItems: "center", mt: 4 }}>
            <Avatar sx={{ width: "8rem", height: "8rem" }} />
            {!editMode && (
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  mt: 2,
                  gap: 1,
                  position: "relative",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  닉네임
                </Typography>
                <IconButton
                  sx={{ position: "absolute", right: -45 }}
                  onClick={onClickEditButton}
                >
                  <CreateIcon />
                </IconButton>
              </Stack>
            )}
            {editMode && (
              <Stack
                direction="row"
                sx={{ alignItems: "center", mt: 2, gap: 1 }}
              >
                <TextField
                  variant="standard"
                  autoFocus
                  value={username}
                  onChange={onChangeUsername}
                />
                <IconButton onClick={onClickSubmitButton}>
                  <CheckCircleIcon />
                </IconButton>
                <IconButton onClick={onClickCancelButton}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            )}
            <Typography sx={{ color: theme.primary }}>
              보유한 토큰: 123123개
            </Typography>
          </Stack>
        </Box>

        <Box sx={boxStyle}>
          <Typography variant="h5">내가 작성한 글</Typography>
        </Box>
        <Divider />
        {FAKE_ARRAY.map((_, index) => (
          <BoardPostCard
            postId={1}
            title="내가 작성한 글"
            username="노논"
            createdAt="2022년 7월 13일 00:00:00"
            views={123}
            likes={1}
            commentCount={1}
            key={index}
          />
        ))}
      </PaperLayout>
    </Base>
  );
};

export default Mypage;
