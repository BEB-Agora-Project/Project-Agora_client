import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getNFTListAPI } from "../../lib/api/market";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";
import NFTCard from "./NFTCard";

const MarketNFT: React.FC = () => {
  const [NFTList, setNFTList] = useState<GetNFTListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const myNFTList = useSelector((state) => state.user.nft);

  const isNFTOwned = (NFTId: number) => {
    return myNFTList.some((nft) => {
      return nft.id === NFTId;
    });
  };

  const fetchNFTList = async () => {
    setIsLoading(true);
    try {
      const response = await getNFTListAPI();
      console.log("MarketNFT.tsx | getNFTListAPI response");
      console.log(response);
      setNFTList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("MarketNFT.tsx | getNFTListAPI error");
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
      {isLoading && <LoadingSpinnerBox height="12rem" />}
      {!isLoading && (
        <Stack
          direction="row"
          spacing={4}
          sx={{ p: 2, pb: 4, overflow: "scroll" }}
        >
          {NFTList.map((NFT, index) => (
            <NFTCard
              key={index}
              id={NFT.id}
              name={NFT.name}
              imageSrc={NFT.image_uri}
              price={NFT.price}
              description={NFT.description}
              isNFTOwned={isNFTOwned}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default MarketNFT;
