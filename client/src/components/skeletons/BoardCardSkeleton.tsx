import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const BoardCardSkeleton: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);

  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => index + 1)
        .map((_, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: matches ? 4 : 2,
              pt: 2,
            }}
          >
            <Skeleton variant="circular" width="4rem" height="4rem" />
            <Stack sx={{ flex: 1 }}>
              <Skeleton variant="rectangular" width="100%" height="5rem" />
            </Stack>
          </Box>
        ))}
    </>
  );
};

export default BoardCardSkeleton;
