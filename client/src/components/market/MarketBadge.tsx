import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { brown, grey, yellow } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getBadgeListAPI } from "../../lib/api/market";
import { theme } from "../../styles/theme";

const MarketBadge: React.FC = () => {
  const [badgeList, setBadgeList] = useState<GetBadgeListAPIResponseType>([]);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const fetchBadgeList = async () => {
    try {
      const response = await getBadgeListAPI();
      console.log(response);
      setBadgeList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBadgeList();
  }, []);

  const getBadgeName = (badgeName: string) => {
    if (badgeName === "bronze Badge") return "브론즈";
    if (badgeName === "silver Badge") return "실버";
    if (badgeName === "gold Badge") return "골드";
  };

  const getBadgeColor = (badgeName: string) => {
    if (badgeName === "bronze Badge") return brown[500];
    if (badgeName === "silver Badge") return grey[500];
    if (badgeName === "gold Badge") return yellow[700];
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5">뱃지</Typography>
      <Stack direction="row" justifyContent="space-around">
        {badgeList.map((badge, index) => (
          <Stack alignItems="center" key={index}>
            <Avatar
              sx={{
                width: "4rem",
                height: "4rem",
                bgcolor: getBadgeColor(badge.itemname),
              }}
            />
            <Typography sx={{ mt: 1 }}>
              {getBadgeName(badge.itemname)}
            </Typography>
            <Typography variant="body2" sx={{ color: grey[500], mb: 1 }}>
              $ {badge.price}
            </Typography>
            <Chip color="primary" label="구매하기" onClick={() => {}} />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default MarketBadge;
