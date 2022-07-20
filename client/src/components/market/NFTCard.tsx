import React from "react";
import { Box, Card, Chip, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { shortenText } from "../../lib/utils";

interface Props {
  imageSrc: string;
  price: number;
  description: string;
  name: string;
  id: number;
  isNFTOwned: (NFTId: number) => boolean;
}

const NFTCard: React.FC<Props> = ({
  imageSrc,
  price,
  description,
  name,
  id,
  isNFTOwned,
}) => {
  return (
    <Card sx={{ minWidth: "16rem" }} variant="outlined">
      <Box sx={{ height: "10rem" }}>
        <img src={imageSrc} alt="" width="100%" height="100%" />
      </Box>
      <Divider />
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
            wordWrap: "break-word",
          }}
        >
          {shortenText(description, 16)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: grey[500] }}>
            $ {price}
          </Typography>
          <Chip
            label={isNFTOwned(id) ? "보유중" : "구매하기"}
            color="primary"
            disabled={isNFTOwned(id)}
            onClick={() => {}}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default NFTCard;
