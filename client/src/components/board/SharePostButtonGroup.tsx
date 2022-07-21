import React, { useState } from "react";
import { Avatar, Box, Snackbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import { DOMAIN_NAME } from "../../lib/staticData";

const SharePostButtonGroup: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const location = useLocation();

  const onClickFacebookButton = () => {
    const url = `${process.env.REACT_APP_HOST}/${location.pathname}`;
    const config = "width=500, height=600";
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${url}`,
      "facebook",
      config
    );
  };

  const onClickTwitterButton = () => {
    const text = "아고라 게시글";
    const config = "width=500, height=600";
    const url = `${process.env.REACT_APP_HOST}/${location.pathname}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "twitter",
      config
    );
  };

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
          cursor: "pointer",
        }}
        onClick={onClickFacebookButton}
      >
        <Avatar
          src="/facebook-logo.png"
          sx={{ width: "115%", height: "115%" }}
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
          cursor: "pointer",
        }}
        onClick={onClickTwitterButton}
      >
        <Avatar
          src="/twitter-logo.png"
          sx={{ width: "100%", height: "100%" }}
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
          message="URL이 복사되었습니다."
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        />
      </Box>
    </Box>
  );
};

export default React.memo(SharePostButtonGroup);
