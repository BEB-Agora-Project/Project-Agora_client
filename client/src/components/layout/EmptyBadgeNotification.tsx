import React from "react";
import { Box, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { grey } from "@mui/material/colors";

const EmptyBadgeNotification: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        p: 4,
      }}
    >
      <MilitaryTechIcon
        sx={{ width: "4rem", height: "4rem", color: grey[300] }}
      />
      <Typography sx={{ color: grey[300] }}>
        보유중인 뱃지가 없습니다.
      </Typography>
    </Box>
  );
};

export default EmptyBadgeNotification;
