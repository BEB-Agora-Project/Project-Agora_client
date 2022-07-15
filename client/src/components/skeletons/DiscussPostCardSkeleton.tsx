import { Skeleton } from "@mui/material";
import React from "react";

const DiscussPostCardSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="rectangular" height="6rem" />
    </>
  );
};

export default DiscussPostCardSkeleton;
