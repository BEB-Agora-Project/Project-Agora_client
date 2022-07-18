import { Box, CircularProgress } from "@mui/material";
import React from "react";

interface Props {
  height?: string;
}

const LoadingSpinnerBox: React.FC<Props> = ({ height }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinnerBox;
