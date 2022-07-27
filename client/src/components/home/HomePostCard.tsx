import { Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getAllPostListAPI } from "../../lib/api/board";
import BoardPostCard from "../board/BoardPostCard";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";

const HomePostCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState<AllPostListType>([]);

  const fetchPostList = async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const response = await getAllPostListAPI();
      console.log("HomePostCard.tsx | getAllPostListAPI response");
      console.log(response);
      setPostList(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("HomePostCard.tsx | getAllPostListAPI error");
      console.log(error);
    }
  };

  const onIntersect = useCallback(
    ([entry]: any) => {
      if (!entry.isIntersecting) return;
      if (isLoading) return;
    },
    [isLoading]
  );

  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect);

    if (!targetRef.current) return;
    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", flex: 1 }}
      square
      variant="outlined"
    >
      {isLoading && <LoadingSpinnerBox height="20rem" />}
      {!isLoading && (
        <>
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
          {postList?.map((post, index) => (
            <BoardPostCard
              key={index}
              postId={post.id}
              title={post.title}
              commentCount={post.Comments.length}
              username={post.User.username}
              createdAt={post.createdAt}
              views={post.hit}
              likes={post.up}
              badge={post.User.badge}
              boardname={post.Board?.boardname}
              isPopular={post.up > 10}
            />
          ))}
        </>
      )}
      {isLoading && <LoadingSpinnerBox height="20rem" />}
      <div ref={targetRef} />
    </Paper>
  );
};

export default HomePostCard;
