import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
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

const Base = styled.div``;
const DiscussPosts: React.FC = () => {
  const [discussPostList, setDiscussPostList] =
    useState<GetDiscussPostsResponseType>([]);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const [searchParams] = useSearchParams();
  const position = searchParams.get("position") || undefined;

  const getTitle = () => {
    if (position === "positive") return "찬성";
    if (position === "neutral") return "중립";
    if (position === "negative") return "반대";
  };

  const fetchDiscussPosts = useCallback(async () => {
    try {
      const response = await getDiscussPostsByOpinionAPI(
        mapPositionToNumber(position)
      );
      console.log(response.data);

      setDiscussPostList(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [position]);

  useEffect(() => {
    fetchDiscussPosts();
  }, [fetchDiscussPosts]);

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
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
              username="노논"
              createdAt={new Date()}
              contents={post.content}
              likes={post.up}
              postId={post.id}
            />
          ))}
          {discussPostList.length === 0 && <p>아무 의견이 없습니다.</p>}
          <DiscussPostSubmit fetchDiscussPosts={fetchDiscussPosts} />
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default DiscussPosts;
