import React from "react";
import { Box, Dialog, Typography } from "@mui/material";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";
import { getBadgeName } from "../../lib/utils";

interface Props {
  open: boolean;
  badgeName: string | null;
  isLoading: boolean;
  onClose: () => void;
  onPurchaseBadge: () => void;
}

const PurchaseBadgeModal: React.FC<Props> = ({
  open,
  badgeName,
  isLoading,
  onClose,
  onPurchaseBadge,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          다음 뱃지를 구매하시겠습니까?
        </Typography>
        <Typography>{getBadgeName(badgeName || "")} 뱃지</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="text" onClick={onClose}>
            돌아가기
          </Button>
          {!isLoading && <Button onClick={onPurchaseBadge}>구매하기</Button>}
          {isLoading && <LoadingButton width="6rem" />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default PurchaseBadgeModal;
