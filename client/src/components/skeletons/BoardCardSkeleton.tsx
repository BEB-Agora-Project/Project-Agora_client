import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const BoardCardSkeleton: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);

  return (
    <Box sx={{ display: "flex", gap: 2, p: 2 }}>
      <Skeleton variant="circular" width="4rem" height="4rem" />
      <Stack>
        <Skeleton width={matches ? "24rem" : "12rem"} height="2rem" />
        <Skeleton width={matches ? "12rem" : "8rem"} height="2rem" />
      </Stack>
    </Box>
  );
};

export default BoardCardSkeleton;
