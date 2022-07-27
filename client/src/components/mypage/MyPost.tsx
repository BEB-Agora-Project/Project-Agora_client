import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import BoardPostCard from "../board/BoardPostCard";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

interface Props {
  myPageInfo: GetMyPageInfoAPIResponseType | undefined;
  username: string;
}

const MyPost: React.FC<Props> = ({ myPageInfo, username }) => {
  const [currentPostCount, setCurrentPostCount] = useState(10);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const filteredPostList = myPageInfo?.myposts.slice(0, currentPostCount);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  const onClickShowMorePostsButton = () => {
    setCurrentPostCount((currentPostCount) => currentPostCount + 10);
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h5">내가 작성한 글</Typography>
      </Box>
      <Divider />
      {filteredPostList?.map((post, index) => (
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
      {myPageInfo && myPageInfo.myposts.length > currentPostCount && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            p: 4,
          }}
        >
          <IconButton onClick={onClickShowMorePostsButton}>
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default MyPost;
