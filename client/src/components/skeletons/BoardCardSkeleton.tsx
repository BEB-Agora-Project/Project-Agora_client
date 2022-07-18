import { Box, Skeleton } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const BoardCardSkeleton: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        px: matches ? 4 : 2,
        pt: 2,
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="5rem" />
    </Box>
  );
};

export default BoardCardSkeleton;
