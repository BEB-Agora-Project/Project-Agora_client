import { Box, Skeleton } from "@mui/material";
import React from "react";

const DiscussSkeleton: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="rectangular" height="16rem" />
    </Box>
  );
};

export default DiscussSkeleton;
