import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const Base = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    padding-top: 2rem;
    .section {
      margin: 0 auto;
      width: ${theme.media.desktop};
    }
  }
`;

const HomeDiscussCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Base>
      <Paper className="section" square variant="outlined">
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
              mb: 1,
            }}
            onClick={() => navigate("/discuss")}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              진행 중인 토론
            </Typography>
            <KeyboardArrowRightIcon />
          </Stack>
          <Typography variant="h6" sx={{ color: theme.primary }}>
            ‘페이커’의 분노 “재경기, e스포츠 가치 떨어트려… 많이 실망했다”
          </Typography>
          <Typography sx={{ pt: 1 }}>
            T1은 13일 오후 5시 서울 종로 롤파크에서 열린 ‘2022 LoL 챔피언스
            코리아(이하 LCK)’ 서머 스플릿 2라운드 한화생명 e스포츠와 맞대결에서
            2대 1로 승리했다. T1은 4연승을 달리며 1라운드를 8승1패로 마무리,
            2연속 우승을 향해 ...
          </Typography>
        </Box>
      </Paper>
    </Base>
  );
};

export default HomeDiscussCard;
