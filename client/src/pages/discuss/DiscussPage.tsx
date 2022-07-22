import React, { useEffect, useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import PaperLayout from "../../components/layout/PaperLayout";
import useCountdown from "../../hooks/useCountdown";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import { getRecentDiscussAPI } from "../../lib/api/discuss";
import BoardPostCard from "../../components/board/BoardPostCard";
import { checkIsDowntime } from "../../lib/utils";
import EmptyPostNotification from "../../components/layout/EmptyPostNotification";
import LoadingSpinnerBox from "../../components/layout/LoadingSpinnerBox";

const Discuss: React.FC = () => {
  const [discussion, setDiscussion] =
    useState<GetRecentDiscussAPIResponseType>();
  const [isLoading, setIsLoading] = useState(false);
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const countdown = useCountdown();

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  const fetchDiscussion = async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const response = await getRecentDiscussAPI();
      console.log("DiscussPage.tsx | getRecentDiscussAPI response");
      console.log(response);

      setDiscussion(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("DiscussPage.tsx | getRecentDiscussAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiscussion();
  }, []);

  if (checkIsDowntime()) {
    return <p>3:30 ~ 4:00 점검중입니다.</p>;
  }

  return (
    <PaperLayout>
      <Box sx={{ ...boxStyle, gap: 0 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            진행중인 토론
          </Typography>
          <Stack>
            <Typography variant="body1" sx={{ color: grey[500] }}>
              다음 토론까지
            </Typography>
            <Typography variant="h6" sx={{ color: grey[500] }}>
              {countdown}
            </Typography>
          </Stack>
        </Stack>
        <Typography sx={{ color: grey[500] }}>
          이슈가 되고있는 주제에 대해 이야기해보세요.
        </Typography>
      </Box>
      <Divider />
      <Box sx={boxStyle}>
        {isLoading && <LoadingSpinnerBox height="24rem" />}
        {!isLoading && (
          <>
            <Typography variant="h6" sx={{ color: theme.primary }}>
              오늘의 이슈
            </Typography>
            <Typography variant="h4">{discussion?.debate.title}</Typography>
            <Typography
              sx={{ color: grey[700], fontSize: "1.25rem", mt: 4, mb: 8 }}
            >
              {discussion?.debate.content}
            </Typography>
          </>
        )}
        <Stack direction="row" justifyContent="space-around">
          <Link to="/discuss/posts?position=positive">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: matches ? "8rem" : "6rem",
                height: matches ? "8rem" : "6rem",
                borderRadius: "50%",
                bgcolor: theme.primaryLight,
                "&:hover": {
                  bgcolor: theme.primarySemiLight,
                },
                cursor: "pointer",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  찬성
                </Typography>
                <Typography sx={{ color: grey[700] }}>3,537</Typography>
              </Stack>
            </Box>
          </Link>
          <Link to="/discuss/posts?position=neutral">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: matches ? "8rem" : "6rem",
                height: matches ? "8rem" : "6rem",
                borderRadius: "50%",
                bgcolor: grey[100],
                "&:hover": {
                  bgcolor: grey[300],
                },
                cursor: "pointer",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  중립
                </Typography>
                <Typography sx={{ color: grey[700] }}>926</Typography>
              </Stack>
            </Box>
          </Link>
          <Link to="/discuss/posts?position=negative">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: matches ? "8rem" : "6rem",
                height: matches ? "8rem" : "6rem",
                borderRadius: "50%",
                bgcolor: red[50],
                "&:hover": {
                  bgcolor: red[100],
                },
                cursor: "pointer",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  반대
                </Typography>
                <Typography sx={{ color: grey[700] }}>1,294</Typography>
              </Stack>
            </Box>
          </Link>
        </Stack>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h5" sx={{ p: matches ? 4 : 2 }}>
          찬성 의견
        </Typography>
        <Divider />
        <Box>
          {discussion?.agreePost.map((post, index) => (
            <BoardPostCard
              key={index}
              postId={11111}
              title={post.title}
              commentCount={11111}
              username="닉네임"
              createdAt={new Date()}
              views={11111}
              likes={11111}
            />
          ))}
        </Box>
        {discussion?.agreePost.length === 0 && <EmptyPostNotification />}
        <Typography variant="h5" sx={{ p: matches ? 4 : 2 }}>
          중립 의견
        </Typography>
        <Divider />
        <Box>
          {discussion?.neutralPost.map((post, index) => (
            <BoardPostCard
              key={index}
              postId={1111}
              title={post.title}
              commentCount={11}
              username="노논"
              createdAt={new Date()}
              views={111}
              likes={111}
            />
          ))}
          {discussion?.neutralPost.length === 0 && (
            <>
              <EmptyPostNotification />
              <Divider />
            </>
          )}
        </Box>
        <Typography variant="h5" sx={{ p: matches ? 4 : 2 }}>
          반대 의견
        </Typography>
        <Divider />
        <Box>
          {discussion?.disagreePost.map((post, index) => (
            <BoardPostCard
              key={index}
              postId={1111}
              title={post.title}
              commentCount={11}
              username="노논"
              createdAt={new Date()}
              views={111}
              likes={111}
            />
          ))}
          {discussion?.disagreePost.length === 0 && <EmptyPostNotification />}
        </Box>
      </Box>
    </PaperLayout>
  );
};

export default Discuss;
