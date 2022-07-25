import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getBadgeImageSrc, getBadgeName } from "../../lib/utils";
import { theme } from "../../styles/theme";

interface Props {
  myPageInfo: GetMyPageInfoAPIResponseType | undefined;
}

const MyBadge: React.FC<Props> = ({ myPageInfo }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5">보유중인 뱃지</Typography>
      <Stack direction="row" spacing={4}>
        {myPageInfo?.myitems.map((item, index) => (
          <Stack key={index} spacing={1} sx={{ alignItems: "center" }}>
            <Avatar
              src={getBadgeImageSrc(item.Normalitem.itemname)}
              sx={{
                width: "4rem",
                height: "4rem",
              }}
            />
            <Typography>{getBadgeName(item.Normalitem.itemname)}</Typography>
            <Chip
              label="사용중"
              sx={{ bgcolor: theme.primary, color: "white", opacity: "0.4" }}
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default MyBadge;
