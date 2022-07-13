import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const MarketItemGridCard: React.FC = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        width: "20rem",
        height: "16rem",
        flexDirection: "column",
      }}
    >
      <Box sx={{ bgcolor: grey[200], height: "12rem" }} />
      <Stack
        direction="row"
        sx={{ p: 2, justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6">아이템 이름</Typography>
        <Typography sx={{ color: grey[500] }}>$ 500</Typography>
      </Stack>
    </Card>
  );
};

export default MarketItemGridCard;
