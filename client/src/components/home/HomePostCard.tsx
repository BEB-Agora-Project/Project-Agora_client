import { Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { FAKE_ARRAY } from "../../lib/dummyData";
import BoardPostCard from "../board/BoardPostCard";

const HomePostCard: React.FC = () => {
  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", flex: 1 }}
      square
      variant="outlined"
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          전체 글 보기
        </Typography>
      </Stack>
      <Divider />
      {FAKE_ARRAY.map((_, index) => (
        <BoardPostCard
          key={index}
          postId={1111}
          title="전체 글 목록에 나타나는 게시글"
          commentCount={2}
          username="닉네임"
          createdAt={new Date()}
          views={11}
          likes={111}
        />
      ))}
    </Paper>
  );
};

export default HomePostCard;
