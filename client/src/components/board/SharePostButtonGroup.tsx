import React, { useState } from "react";
import { Avatar, Box, Snackbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import { DOMAIN_NAME } from "../../lib/staticData";

const SharePostButtonGroup: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const location = useLocation();
  console.log(location);

  const onClickCopyUrlButton = async () => {
    setSnackbarOpen(true);
    await navigator.clipboard.writeText(`${DOMAIN_NAME}${location.pathname}`);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", px: 2, gap: 1, py: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          border: `1px solid ${grey[300]}`,
          cursor: "pointer",
        }}
      >
        <Avatar
          src="/google-logo.png"
          alt=""
          sx={{ width: "1rem", height: "1rem" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          bgcolor: "#fbe201",
          cursor: "pointer",
        }}
      >
        <Avatar
          src="/kakao-logo.png"
          alt=""
          sx={{ width: "1rem", height: "1rem" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          bgcolor: grey[700],
          cursor: "pointer",
        }}
        onClick={onClickCopyUrlButton}
      >
        <Typography variant="caption" sx={{ color: "white", fontWeight: 700 }}>
          URL
        </Typography>
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          autoHideDuration={2000}
          message="복사되었습니다."
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        />
      </Box>
    </Box>
  );
};

export default SharePostButtonGroup;
