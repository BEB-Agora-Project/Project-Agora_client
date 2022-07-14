import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const MarketBadge: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5">뱃지</Typography>
      <Stack direction="row" justifyContent="space-around">
        <Stack alignItems="center">
          <Avatar sx={{ width: "4rem", height: "4rem" }} />
          <Typography sx={{ mt: 1 }}>실버</Typography>
          <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
            $ 500
          </Typography>
          <Chip color="primary" label="구매하기" onClick={() => {}} />
        </Stack>
        <Stack alignItems="center">
          <Avatar sx={{ width: "4rem", height: "4rem" }} />
          <Typography sx={{ mt: 1 }}>골드</Typography>
          <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
            $ 2000
          </Typography>
          <Chip color="primary" label="구매하기" onClick={() => {}} />
        </Stack>
        <Stack alignItems="center">
          <Avatar sx={{ width: "4rem", height: "4rem" }} />
          <Typography sx={{ mt: 1 }}>플래티넘</Typography>
          <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
            $ 5000
          </Typography>
          <Chip color="primary" label="구매하기" onClick={() => {}} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MarketBadge;
