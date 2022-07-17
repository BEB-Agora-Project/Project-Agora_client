import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import PaperLayout from "../../components/layout/PaperLayout";
import useCountdown from "../../hooks/useCountdown";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import { getRecentDiscussAPI } from "../../lib/api/discuss";

const Base = styled.div``;

const Discuss: React.FC = () => {
  const [discussion, setDiscussion] =
    useState<GetRecentDiscussAPIResponseType>();
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const countdown = useCountdown();

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  const fetchDiscussion = async () => {
    /*********************** API call **************************/
    try {
      const response = await getRecentDiscussAPI();
      console.log(response.data);

      setDiscussion(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiscussion();
  }, []);

  return (
    <Base>
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
          <Typography variant="h6" sx={{ color: theme.primary }}>
            오늘의 이슈
          </Typography>
          <Typography variant="h4">{discussion?.debate.title}</Typography>
          <Typography
            sx={{ color: grey[700], fontSize: "1.25rem", mt: 4, mb: 8 }}
          >
            {discussion?.debate.content}
          </Typography>
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
                    긍정
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
                    부정
                  </Typography>
                  <Typography sx={{ color: grey[700] }}>1,294</Typography>
                </Stack>
              </Box>
            </Link>
          </Stack>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default Discuss;
