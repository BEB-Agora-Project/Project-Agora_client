import React, { useEffect } from "react";
import { Avatar, Box, Dialog, Stack, Typography } from "@mui/material";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";
import { theme } from "../../styles/theme";
import { useSelector } from "../../store";
import { grey } from "@mui/material/colors";

interface Props {
  open: boolean;
  NFTName: string | null;
  NFTPrice: number;
  NFTImage: string;
  isLoading: boolean;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  onPurchaseNFT: () => void;
}

const PurchaseNFTModal: React.FC<Props> = ({
  open,
  NFTName,
  NFTPrice,
  NFTImage,
  isLoading,
  error,
  setError,
  onClose,
  onPurchaseNFT,
}) => {
  useEffect(() => {
    return () => setError(false);
  }, [setError]);

  console.log(NFTPrice);

  const token = useSelector((state) => state.user.token);

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          다음 NFT를 구매하시겠습니까?
        </Typography>
        <Avatar
          src={NFTImage}
          sx={{ alignSelf: "center", width: "8rem", height: "8rem" }}
        />
        <Stack>
          <Typography sx={{ textAlign: "center" }}>{NFTName}</Typography>
          {error && (
            <Typography sx={{ color: theme.error }}>
              {" "}
              네트워크 연결이 좋지 않습니다. 다시 시도해주세요.
            </Typography>
          )}
          <Typography sx={{ textAlign: "center", color: grey[500] }}>
            $ {NFTPrice}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              alignSelf: "center",
              color: theme.secondary,
            }}
          >
            등장 확률: 10%
          </Typography>
          <Typography sx={{ alignSelf: "center" }}>
            보유중인 토큰:{" "}
            <Typography component="span" sx={{ color: theme.primary }}>
              {token}
            </Typography>
            개
          </Typography>
          {token < NFTPrice && (
            <Typography
              variant="body2"
              sx={{ alignSelf: "center", color: theme.error }}
            >
              구매하기 위한 토큰이 부족합니다.
            </Typography>
          )}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="text" onClick={onClose}>
            돌아가기
          </Button>
          {!isLoading && (
            <Button onClick={onPurchaseNFT} disabled={token < NFTPrice}>
              구매하기
            </Button>
          )}
          {isLoading && <LoadingButton width="6rem" />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default PurchaseNFTModal;
