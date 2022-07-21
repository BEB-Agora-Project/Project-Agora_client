import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getBadgeListAPI } from "../../lib/api/market";
import { getBadgeImageSrc, getBadgeName } from "../../lib/utils";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";

const MarketBadge: React.FC = () => {
  const [badgeList, setBadgeList] = useState<GetBadgeListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const myBadgeList = useSelector((state) => state.user.badge);

  const isBadgeOwned = (badgeName: string) => {
    return myBadgeList.some((badge) => {
      return badge.Normalitem.itemname === badgeName;
    });
  };

  const fetchBadgeList = async () => {
    setIsLoading(true);
    try {
      const response = await getBadgeListAPI();
      console.log("MarketBadge.tsx | getBadgeListAPI response");
      console.log(response);
      setBadgeList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("MarketBadge.tsx | getBadgeListAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBadgeList();
  }, []);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5">뱃지</Typography>
      {isLoading && <LoadingSpinnerBox height="12rem" />}
      {!isLoading && (
        <Stack
          direction="row"
          sx={{ justifyContent: "space-around", flexWrap: "wrap", gap: 8 }}
        >
          {badgeList.map((badge, index) => (
            <Stack alignItems="center" key={index}>
              <Avatar
                src={getBadgeImageSrc(badge.itemname)}
                sx={{
                  width: "4rem",
                  height: "4rem",
                }}
              />
              <Typography sx={{ mt: 1 }}>
                {getBadgeName(badge.itemname)}
              </Typography>
              <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
                $ {badge.price}
              </Typography>
              <Chip
                color="primary"
                label={isBadgeOwned(badge.itemname) ? "보유중" : "구매하기"}
                disabled={isBadgeOwned(badge.itemname)}
                onClick={() => {}}
              />
            </Stack>
          ))}
          <Stack alignItems="center">
            <Avatar
              src="/platinum-badge.png"
              sx={{
                width: "4rem",
                height: "4rem",
              }}
            />
            <Typography sx={{ mt: 1 }}>플래티넘</Typography>
            <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
              $ 1000
            </Typography>
            <Chip
              color="primary"
              label={"출시예정"}
              disabled
              onClick={() => {}}
            />
          </Stack>
          <Stack alignItems="center">
            <Avatar
              src="/diamond-badge.png"
              sx={{
                width: "4rem",
                height: "4rem",
              }}
            />
            <Typography sx={{ mt: 1 }}>다이아몬드</Typography>
            <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
              $ 2000
            </Typography>
            <Chip
              color="primary"
              label={"출시예정"}
              disabled
              onClick={() => {}}
            />
          </Stack>
          <Stack alignItems="center">
            <Avatar
              src="/challenger-badge.png"
              sx={{
                width: "4rem",
                height: "4rem",
              }}
            />
            <Typography sx={{ mt: 1 }}>챌린저</Typography>
            <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
              $ 5000
            </Typography>
            <Chip
              color="primary"
              label={"출시예정"}
              disabled
              onClick={() => {}}
            />
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default MarketBadge;
