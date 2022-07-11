import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import MarketAccordian from "../components/MarketAccordian";
import MarketItemCard from "../components/MarketItemCard";
import PaperLayout from "../components/PaperLayout";
import useMediaQuery from "../hooks/useMediaQuery";
import { FAKE_ARRAY } from "../lib/dummyData";
import { theme } from "../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MarketItemGridCard from "../components/MarketItemGridCard";

const Base = styled.div``;

const Market: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              마켓
            </Typography>
            <IconButton>
              <SearchIcon fontSize="large" />
            </IconButton>
          </Box>
          <Typography sx={{ color: grey[500] }}>
            커뮤니티 내에서 사용할 수 있는 다양한 아이템을 구매하세요.
          </Typography>
        </Box>
        <Divider />
        <Box sx={boxStyle}>
          <Typography variant="h5">뱃지</Typography>
          <Stack direction="row" justifyContent="space-around">
            <Stack alignItems="center">
              <Avatar sx={{ width: "4rem", height: "4rem" }} />
              <Typography sx={{ mt: 1 }}>실버</Typography>
              <Typography variant="body2" sx={{ color: grey[500] }}>
                $ 500
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Avatar sx={{ width: "4rem", height: "4rem" }} />
              <Typography sx={{ mt: 1 }}>골드</Typography>
              <Typography variant="body2" sx={{ color: grey[500] }}>
                $ 2000
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Avatar sx={{ width: "4rem", height: "4rem" }} />
              <Typography sx={{ mt: 1 }}>플래티넘</Typography>
              <Typography variant="body2" sx={{ color: grey[500] }}>
                $ 5000
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Divider />
        <Box sx={boxStyle}>
          <Typography variant="h5">인기 NFT</Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{ p: 2, pb: 4, overflow: "scroll" }}
          >
            {FAKE_ARRAY.map((_, index) => (
              <MarketItemCard key={index} />
            ))}
          </Stack>
        </Box>
        <Divider />
        <Box sx={boxStyle}>
          <Typography variant="h5">전체 NFT</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <MarketItemGridCard />
            <MarketItemGridCard />
            <MarketItemGridCard />
            <MarketItemGridCard />
            <MarketItemGridCard />
            <MarketItemGridCard />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 4 }}>
          <IconButton>
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={boxStyle} bgcolor={grey[400]}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: "white", mt: 8 }}
          >
            자주 묻는 질문
          </Typography>
          <MarketAccordian />
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default Market;
