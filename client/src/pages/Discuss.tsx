import React from "react";
import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import PaperLayout from "../components/PaperLayout";
import useCountdown from "../hooks/useCountdown";
import useMediaQuery from "../hooks/useMediaQuery";
import { theme } from "../styles/theme";
import { FAKE_NEWS_CONTENTS } from "../lib/dummyData";

const Base = styled.div``;

const Discuss: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const countdown = useCountdown();

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box sx={boxStyle}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              진행중인 토론
            </Typography>
            <Typography variant="h5" sx={{ color: grey[500] }}>
              다음 토론까지: {countdown}
            </Typography>
          </Stack>
          <Typography sx={{ color: grey[500] }}>
            이슈가 되고있는 주제에 대해 이야기해보세요.
          </Typography>
        </Box>
        <Divider />
        <Box sx={boxStyle}>
          <Typography variant="h6" sx={{ color: grey[700] }}>
            오늘의 이슈
          </Typography>
          <Typography variant="h4">
            '테라 공격' 지갑 주인은 코인베이스, 바이낸스, OKX가 알고 있다
          </Typography>
          <Typography
            sx={{ color: grey[700], fontSize: "1.25rem", mt: 4, mb: 8 }}
          >
            {FAKE_NEWS_CONTENTS}
          </Typography>
          <Stack direction="row" justifyContent="space-around">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "8rem",
                height: "8rem",
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "8rem",
                height: "8rem",
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "8rem",
                height: "8rem",
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
          </Stack>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default Discuss;
