import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";

const LoginPromptHeader: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const onClickLoginButton = () => {
    navigate("/login");
  };

  return (
    <>
      {!isLoggedIn && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "2.5rem",
            bgcolor: grey[300],
            px: matches ? 4 : 2,
          }}
        >
          <Stack direction="row" sx={{ gap: 1 }}>
            <Typography variant="body2">
              로그인하고 글을 작성하면 토큰을 얻을 수 있습니다.
            </Typography>
            <MuiLink
              sx={{ cursor: "pointer", fontSize: "0.875rem" }}
              onClick={onClickLoginButton}
            >
              로그인하기
            </MuiLink>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default LoginPromptHeader;
