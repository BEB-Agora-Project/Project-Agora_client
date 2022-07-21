import styled from "@emotion/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DiscussPostCard from "../../components/discuss/DiscussPostCard";
import DiscussPostSubmit from "../../components/discuss/DiscussPostSubmit";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getDiscussPostsByOpinionAPI } from "../../lib/api/discuss";
import { mapPositionToNumber } from "../../lib/utils";
import { theme } from "../../styles/theme";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import DiscussPostCardSkeleton from "../../components/skeletons/DiscussPostCardSkeleton";

const Base = styled.div``;
const DiscussPosts: React.FC = () => {
  const [discussPostList, setDiscussPostList] =
    useState<GetDiscussPostsAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const [searchParams] = useSearchParams();
  const position = searchParams.get("position") || undefined;

  const getTitle = () => {
    if (position === "positive") return "찬성";
    if (position === "neutral") return "중립";
    if (position === "negative") return "반대";
  };

  const fetchDiscussPosts = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getDiscussPostsByOpinionAPI(
        mapPositionToNumber(position)
      );
      console.log(
        "DiscussPostsPage.tsx | getDiscussPostsByOpinionAPI response"
      );
      console.log(response.data);

      setDiscussPostList(response.data);
    } catch (error) {
      console.log("DiscussPostsPage.tsx | getDiscussPostsByOpinionAPI error");
      console.log(error);
    }
  }, [position]);

  const onClickFetchMoreButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchDiscussPosts();
  }, [fetchDiscussPosts]);

  return (
    <Base>
      <PaperLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: matches ? 4 : 2,
          }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h5">{getTitle()} 의견</Typography>
            <Typography variant="body1" sx={{ color: grey[500] }}>
              최신순
            </Typography>
          </Stack>
          {discussPostList.map((post, index) => (
            <DiscussPostCard
              key={index}
              username={post.User.username}
              createdAt={post.createdAt}
              title={post.title}
              contents={post.content}
              likes={post.up}
              postId={post.id}
              dislikes={post.down}
            />
          ))}
          {discussPostList.length === 0 && <p>아무 의견이 없습니다.</p>}
          <Stack sx={{ alignItems: "center" }}>
            {!isLoading && discussPostList.length !== 0 && (
              <IconButton
                onClick={onClickFetchMoreButton}
                aria-label="fetch-more-discuss-post"
              >
                <KeyboardDoubleArrowDownIcon />
              </IconButton>
            )}
          </Stack>
          {isLoading && (
            <>
              <DiscussPostCardSkeleton />
              <DiscussPostCardSkeleton />
            </>
          )}
          <DiscussPostSubmit fetchDiscussPosts={fetchDiscussPosts} />
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default DiscussPosts;
