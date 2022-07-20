import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import BoardPostCard from "../board/BoardPostCard";

interface Props {
  myPageInfo: GetMyPageInfoAPIResponseType | undefined;
  username: string;
}

const MyPost: React.FC<Props> = ({ myPageInfo, username }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h5">내가 작성한 글</Typography>
      </Box>
      <Divider />
      {myPageInfo?.myposts.map((post, index) => (
        <BoardPostCard
          postId={post.id}
          title={post.title}
          username={username}
          createdAt={post.created_at}
          views={post.hit}
          likes={post.up}
          commentCount={post.Comments.length}
          key={index}
        />
      ))}
    </>
  );
};

export default MyPost;
