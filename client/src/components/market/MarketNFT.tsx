import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getNFTListAPI } from "../../lib/api/market";
import { theme } from "../../styles/theme";
import NFTCard from "./NFTCard";

const MarketNFT: React.FC = () => {
  const [NFTList, setNFTList] = useState<GetNFTListAPIResponseType>([]);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const fetchNFTList = async () => {
    try {
      const response = await getNFTListAPI();
      console.log(response);
      setNFTList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNFTList();
  }, []);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5">NFT</Typography>
      <Stack
        direction="row"
        spacing={4}
        sx={{ p: 2, pb: 4, overflow: "scroll" }}
      >
        {NFTList.map((NFT, index) => (
          <NFTCard
            key={index}
            name={NFT.name}
            imageSrc={NFT.image_uri}
            price={NFT.price}
            description={NFT.description}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default MarketNFT;
