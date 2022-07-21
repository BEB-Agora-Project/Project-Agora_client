import React, { useState } from "react";
import { Avatar, Box, Dialog, Stack, Typography } from "@mui/material";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";
import { getBadgeImageSrc, getBadgeName } from "../../lib/utils";
import { useDispatch, useSelector } from "../../store";
import { purchaseBadgeAPI } from "../../lib/api/market";
import { modalActions } from "../../store/modalSlice";
import { grey } from "@mui/material/colors";
import { theme } from "../../styles/theme";

interface Props {
  badgeName: string | null;
  badgeId: number | null;
  badgePrice: number | null;
  fetchBadgeList: () => void;
}

const PurchaseBadgeModal: React.FC<Props> = ({
  badgeName,
  badgeId,
  badgePrice,
  fetchBadgeList,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const open = useSelector((state) => state.modal.isPurchaseBadgeModalOpen);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(modalActions.setIsPurchaseBadgeModalOpen(false));
  };

  const onPurchaseBadge = async () => {
    if (!badgeId) return;

    setIsLoading(true);
    try {
      const body = {
        itemId: badgeId,
      };
      const response = await purchaseBadgeAPI(body);
      console.log("MarketBadge.tsx | purchaseBadgeAPI error");
      console.log(response);

      fetchBadgeList();
      setIsLoading(false);
    } catch (error) {
      console.log("MarketBadge.tsx | purchaseBadgeAPI error");
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          다음 뱃지를 구매하시겠습니까?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Avatar
            src={getBadgeImageSrc(badgeName || "")}
            sx={{ width: "6rem", height: "6rem" }}
          />
          <Stack sx={{ alignItems: "center" }}>
            <Typography>{badgeName && getBadgeName(badgeName)}</Typography>
            <Typography sx={{ color: grey[500] }}>
              {badgePrice && `$ ${badgePrice}`}
            </Typography>
          </Stack>
        </Box>
        <Stack>
          <Typography sx={{ alignSelf: "center" }}>
            보유중인 토큰:{" "}
            <Typography component="span" sx={{ color: theme.primary }}>
              {token}
            </Typography>
            개
          </Typography>
          {token < (badgePrice || 0) && (
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
            <Button
              disabled={token < (badgePrice || 0)}
              onClick={onPurchaseBadge}
            >
              구매하기
            </Button>
          )}
          {isLoading && <LoadingButton width="6rem" />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default PurchaseBadgeModal;
