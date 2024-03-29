import React from "react";
import { Box, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { grey } from "@mui/material/colors";

const EmptyNFTNotification: React.FC = () => {
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
      <EmojiEmotionsIcon
        sx={{ width: "4rem", height: "4rem", color: grey[300] }}
      />
      <Typography sx={{ color: grey[300] }}>
        보유중인 NFT가 없습니다.
      </Typography>
    </Box>
  );
};

export default EmptyNFTNotification;
