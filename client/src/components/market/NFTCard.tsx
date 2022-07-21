import React from "react";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
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
    <Card sx={{ minWidth: "14rem" }} variant="outlined">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12rem",
          bgcolor: grey[100],
        }}
      >
        {/* <img src={imageSrc} alt="" width="100%" height="100%" /> */}
        <Avatar
          src={imageSrc}
          sx={{
            width: "10rem",
            height: "10rem",
            border: `1px solid ${grey[300]}`,
          }}
        />
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
            onClick={onClickPurchaseButton}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default NFTCard;
