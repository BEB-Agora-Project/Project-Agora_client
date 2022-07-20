import styled from "@emotion/styled";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import MarketAccordian from "../../components/market/MarketAccordian";
import MarketItemCard from "../../components/market/MarketItemCard";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { theme } from "../../styles/theme";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MarketItemGridCard from "../../components/market/MarketItemGridCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "../../components/common/Button";
import MarketBadge from "../../components/market/MarketBadge";

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
      <PaperLayout>
        <Box sx={{ ...boxStyle, gap: 0 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            마켓 플레이스
          </Typography>
          <Typography sx={{ color: grey[500] }}>
            커뮤니티 내에서 사용할 수 있는 다양한 아이템을 구매하세요.
          </Typography>
        </Box>
        <Divider />
        <MarketBadge />
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
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center", pb: 2 }}
            >
              <Typography variant="h5">전체 NFT</Typography>
              <Stack direction="row" sx={{ color: grey[500] }}>
                <Typography>인기순</Typography>
                <KeyboardArrowDownIcon />
              </Stack>
            </Stack>
            <Button>토큰 충전하기</Button>
          </Stack>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            mb: 4,
          }}
        >
          <Typography sx={{ fontWeight: "700", color: grey[700] }}>
            더보기
          </Typography>
          <IconButton>
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={boxStyle} bgcolor={theme.primary}>
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
