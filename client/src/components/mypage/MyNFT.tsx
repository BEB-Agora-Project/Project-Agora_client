import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

interface Props {
  myPageInfo: GetMyPageInfoAPIResponseType | undefined;
}

const MyNFT: React.FC<Props> = ({ myPageInfo }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h5">보유중인 NFT</Typography>
        <Stack direction="row" spacing={4} sx={{ overflow: "scroll", pb: 4 }}>
          {myPageInfo?.mynft.map((nft, index) => (
            <Stack
              key={index}
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <Avatar
                src={nft.image_uri}
                sx={{ width: "6rem", height: "6rem" }}
              />
              <Typography>{nft.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default MyNFT;
