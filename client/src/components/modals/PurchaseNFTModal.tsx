import React from "react";
import { Box, Dialog, Typography } from "@mui/material";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";

interface Props {
  open: boolean;
  NFTName: string | null;
  isLoading: boolean;
  onClose: () => void;
  onPurchaseNFT: () => void;
}

const PurchaseNFTModal: React.FC<Props> = ({
  open,
  NFTName,
  isLoading,
  onClose,
  onPurchaseNFT,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          다음 NFT를 구매하시겠습니까?
        </Typography>
        <Typography>{NFTName}</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="text" onClick={onClose}>
            돌아가기
          </Button>
          {!isLoading && <Button onClick={onPurchaseNFT}>구매하기</Button>}
          {isLoading && <LoadingButton width="6rem" />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default PurchaseNFTModal;
