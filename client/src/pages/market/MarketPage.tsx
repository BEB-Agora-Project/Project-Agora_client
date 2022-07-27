import React from "react";
import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import MarketAccordian from "../../components/market/MarketAccordian";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import MarketBadge from "../../components/market/MarketBadge";
import MarketNFT from "../../components/market/MarketNFT";

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
        <Box sx={{ ...boxStyle, gap: 1 }}>
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
        <MarketNFT />
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
