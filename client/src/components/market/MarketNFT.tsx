import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getNFTListAPI } from "../../lib/api/market";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";
import PurchaseNFTModal from "../modals/PurchaseNFTModal";
import NFTCard from "./NFTCard";
import { purchaseNFTAPI } from "../../lib/api/market";

const MarketNFT: React.FC = () => {
  const [NFTList, setNFTList] = useState<GetNFTListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchaseLoading, setIsPurchaseLoading] = useState(false);
  const [purchaseNFTModalOpen, setPurchaseNFTModalOpen] = useState(false);
  const [NFTName, setNFTName] = useState<string | null>(null);
  const [NFTId, setNFTId] = useState<number | null>(null);

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

  const onPurchaseNFT = async () => {
    if (!NFTId) return;

    setIsPurchaseLoading(true);
    try {
      const body = {
        nftId: NFTId,
      };
      const response = await purchaseNFTAPI(body);
      console.log("MarketNFT.tsx | purchaseNFTAPI response");
      console.log(response);
      setIsPurchaseLoading(false);
      setPurchaseNFTModalOpen(false);
      fetchNFTList();
    } catch (error) {
      console.log("MarketNFT.tsx | purchaseNFTAPI error");
      console.log(error);
    }
  };

  const onClickPurchaseButton = (NFTId: number, NFTName: string) => {
    setPurchaseNFTModalOpen(true);
    setNFTId(NFTId);
    setNFTName(NFTName);
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
    <>
      <PurchaseNFTModal
        open={purchaseNFTModalOpen}
        onClose={() => setPurchaseNFTModalOpen(false)}
        NFTName={NFTName}
        isLoading={isPurchaseLoading}
        onPurchaseNFT={onPurchaseNFT}
      />
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
                onClickPurchaseButton={() =>
                  onClickPurchaseButton(NFT.id, NFT.name)
                }
              />
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default MarketNFT;
