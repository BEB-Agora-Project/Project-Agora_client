import { Box, Snackbar, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getNFTListAPI } from "../../lib/api/market";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";
import PurchaseNFTModal from "../modals/PurchaseNFTModal";
import NFTCard from "./NFTCard";
import { purchaseNFTAPI } from "../../lib/api/market";
import usePromptLogin from "../../hooks/usePromptLogin";

const MarketNFT: React.FC = () => {
  const [NFTList, setNFTList] = useState<GetNFTListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchaseLoading, setIsPurchaseLoading] = useState(false);
  const [purchaseNFTModalOpen, setPurchaseNFTModalOpen] = useState(false);
  const [NFTName, setNFTName] = useState<string | null>(null);
  const [NFTId, setNFTId] = useState<number | null>(null);
  const [NFTPrice, setNFTPrice] = useState<number>(0);
  const [NFTImage, setNFTImage] = useState<string>("");
  const [error, setError] = useState(false);
  const [succeededSnackbarOpen, setSucceededSnackbarOpen] = useState(false);
  const [failedSnackbarOpen, setFailedSnackbarOpen] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const promptLogin = usePromptLogin();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
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
      setPurchaseNFTModalOpen(false);
      fetchNFTList();

      if (response.data === "구매에 실패했습니다") {
        setFailedSnackbarOpen(true);
      } else {
        setSucceededSnackbarOpen(true);
      }
    } catch (error) {
      console.log("MarketNFT.tsx | purchaseNFTAPI error");
      console.log(error);
      setError(true);
    } finally {
      setIsPurchaseLoading(false);
    }
  };

  const onClickPurchaseButton = (
    NFTId: number,
    NFTName: string,
    NFTPrice: number,
    NFTImage: string
  ) => {
    if (!isLoggedIn) return promptLogin();

    setPurchaseNFTModalOpen(true);
    setNFTId(NFTId);
    setNFTName(NFTName);
    setNFTPrice(NFTPrice);
    setNFTImage(NFTImage);
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
      <Snackbar
        open={succeededSnackbarOpen}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        message="구매에 성공했습니다!"
        key="success"
        autoHideDuration={3000}
        onClose={() => setSucceededSnackbarOpen(false)}
      />
      <Snackbar
        open={failedSnackbarOpen}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        message="구매에 실패했습니다"
        key="fail"
        autoHideDuration={3000}
        onClose={() => setFailedSnackbarOpen(false)}
      />
      {purchaseNFTModalOpen && (
        <PurchaseNFTModal
          open={purchaseNFTModalOpen}
          onClose={() => setPurchaseNFTModalOpen(false)}
          NFTName={NFTName}
          NFTPrice={NFTPrice}
          NFTImage={NFTImage}
          isLoading={isPurchaseLoading}
          onPurchaseNFT={onPurchaseNFT}
          error={error}
          setError={setError}
        />
      )}
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
                  onClickPurchaseButton(
                    NFT.id,
                    NFT.name,
                    NFT.price,
                    NFT.image_uri
                  )
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
