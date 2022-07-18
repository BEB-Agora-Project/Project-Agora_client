import React from "react";
import styled from "@emotion/styled";
import LoginPromptHeader from "../components/home/LoginPromptHeader";
import { grey } from "@mui/material/colors";
import { theme } from "../styles/theme";
import {
  Box,
  Divider,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import useMediaQuery from "../hooks/useMediaQuery";
import { FAKE_ARRAY } from "../lib/dummyData";
import BoardPostCard from "../components/board/BoardPostCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Base = styled.div`
  background-color: ${grey[100]};

  padding-top: 1rem;
  padding-bottom: 1rem;

  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .aside {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    padding-top: 2rem;
    padding-bottom: 2rem;

    .section {
      margin: 0 auto;
      width: ${theme.media.desktop};
    }

    .aside {
      width: 18rem;
    }

    .section-wrapper {
      margin: 0 auto;
      margin-top: 2rem;
      width: ${theme.media.desktop};
      flex-direction: row;
      gap: 2rem;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <Base>
      <LoginPromptHeader />
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
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              진행 중인 토론
            </Typography>
            <KeyboardArrowRightIcon />
          </Stack>
          <Typography variant="h6" sx={{ color: theme.primary }}>
            ‘페이커’의 분노 “재경기, e스포츠 가치 떨어트려… 많이 실망했다”
          </Typography>
          <Typography>
            T1은 13일 오후 5시 서울 종로 롤파크에서 열린 ‘2022 LoL 챔피언스
            코리아(이하 LCK)’ 서머 스플릿 2라운드 한화생명 e스포츠와 맞대결에서
            2대 1로 승리했다. T1은 4연승을 달리며 1라운드를 8승1패로 마무리,
            2연속 우승을 향해 ...
          </Typography>
        </Box>
      </Paper>
      <Box className="section-wrapper">
        <Paper className="aside" square variant="outlined">
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              커뮤니티 목록
            </Typography>

            <KeyboardArrowRightIcon />
          </Stack>
          <Divider />
          <MenuItem sx={{ height: "3.5rem" }} divider>
            아고라
          </MenuItem>
          <MenuItem sx={{ height: "3.5rem" }} divider>
            블록체인
          </MenuItem>
          <MenuItem sx={{ height: "3.5rem" }} divider>
            코드스테이츠
          </MenuItem>
          <MenuItem sx={{ height: "3.5rem" }} divider>
            리그 오브 레전드
          </MenuItem>
          <MenuItem sx={{ height: "3.5rem" }} divider>
            유머
          </MenuItem>
        </Paper>
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
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              전체 글 보기
            </Typography>
            <KeyboardArrowRightIcon />
          </Stack>
          <Divider />
          {FAKE_ARRAY.map(() => (
            <BoardPostCard
              postId={1111}
              title="전체 글 목록에 나타나는 게시글"
              commentCount={2}
              username="닉네임"
              createdAt={new Date()}
              views={11}
              likes={111}
            />
          ))}
        </Paper>
      </Box>
    </Base>
  );
};

export default Home;
