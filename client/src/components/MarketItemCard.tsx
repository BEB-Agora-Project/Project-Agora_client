import React from "react";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const MarketItemCard: React.FC = () => {
  return (
    <Card sx={{ width: "14rem", height: "16rem" }} variant="outlined">
      <Box sx={{ height: "10rem", bgcolor: grey[200] }} />
      <Divider />
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography variant="h6">아이템 이름</Typography>
        <Typography variant="body2" sx={{ color: grey[500] }}>
          $ 5000
        </Typography>
      </Stack>
    </Card>
  );
};

export default MarketItemCard;
