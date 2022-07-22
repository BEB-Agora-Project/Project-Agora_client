import React from "react";
import { Avatar, Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { shortenText } from "../../lib/utils";

interface Props {
  imageSrc: string;
  price: number;
  description: string;
  name: string;
  id: number;
  isNFTOwned: (NFTId: number) => boolean;
  onClickPurchaseButton: () => void;
}

const NFTCard: React.FC<Props> = ({
  imageSrc,
  price,
  description,
  name,
  id,
  isNFTOwned,
  onClickPurchaseButton,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={imageSrc}
          variant="square"
          sx={{
            width: "12rem",
            height: "12rem",
            border: `1px solid ${grey[300]}`,
          }}
        />
      </Box>
      <Divider />
      <Stack spacing={1}>
        <Typography variant="h6">{name}</Typography>

        <Typography
          variant="body2"
          sx={{
            color: grey[700],
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
            onClick={onClickPurchaseButton}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default NFTCard;
