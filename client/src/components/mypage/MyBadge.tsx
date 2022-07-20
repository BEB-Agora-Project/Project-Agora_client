import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
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
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Avatar sx={{ width: "4rem", height: "4rem" }} />
            <Typography key={index}>{item.Normalitem.itemname}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default MyBadge;
