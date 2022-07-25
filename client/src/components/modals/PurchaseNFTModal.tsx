import React, { useEffect } from "react";
import { Box, Dialog, Typography } from "@mui/material";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";
import { theme } from "../../styles/theme";

interface Props {
  open: boolean;
  NFTName: string | null;
  isLoading: boolean;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  onPurchaseNFT: () => void;
}

const PurchaseNFTModal: React.FC<Props> = ({
  open,
  NFTName,
  isLoading,
  error,
  setError,
  onClose,
  onPurchaseNFT,
}) => {
  useEffect(() => {
    return () => setError(false);
  }, [setError]);

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          다음 NFT를 구매하시겠습니까?
        </Typography>
        <Typography>{NFTName}</Typography>
        {error && (
          <Typography sx={{ color: theme.error }}>
            {" "}
            네트워크 연결이 좋지 않습니다. 다시 시도해주세요.
          </Typography>
        )}
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
