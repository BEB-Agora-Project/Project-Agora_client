import { Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FAKE_ARRAY } from "../../lib/dummyData";
import BoardPostCard from "../board/BoardPostCard";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";

const HomePostCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onIntersect = ([entry]: any) => {
    if (!entry.isIntersecting) return;
    if (isLoading) return;

    setIsLoading(true);
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect);

    if (!targetRef.current) return;
    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
      {isLoading && <LoadingSpinnerBox height="20rem" />}
      <div ref={targetRef} />
    </Paper>
  );
};

export default HomePostCard;
