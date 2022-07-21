import {
  Box,
  Divider,
  IconButton,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { parseDateAbsolute } from "../../lib/utils";
import LinkIcon from "@mui/icons-material/Link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

interface Props {
  myPageInfo?: GetMyPageInfoAPIResponseType;
}

const AccountInfo: React.FC<Props> = ({ myPageInfo }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const onClickCopyWalletAddress = async () => {
    setSnackbarOpen(true);
    await navigator.clipboard.writeText("anfeeuianfia11231");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        p: matches ? 4 : 2,
      }}
    >
      <Typography variant="h5" sx={{ mt: 2 }}>
        개인정보 관리
      </Typography>
      <Typography>이메일</Typography>
      <Stack spacing={1}>
        <Typography sx={{ color: grey[400] }}>
          {myPageInfo?.userinfo.email}
        </Typography>
        <Divider />
      </Stack>
      <Typography>가입일</Typography>
      <Stack spacing={1}>
        <Typography>
          {parseDateAbsolute(myPageInfo?.userinfo.created_at).slice(0, 13)}
        </Typography>
        <Divider />
      </Stack>
      <Typography>지갑 주소</Typography>
      <Stack spacing={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{myPageInfo?.userinfo.address}</Typography>
          <Tooltip title="복사하기" placement="top" arrow>
            <IconButton onClick={onClickCopyWalletAddress}>
              <LinkIcon />
            </IconButton>
          </Tooltip>
          <Snackbar
            open={snackbarOpen}
            onClose={() => setSnackbarOpen(false)}
            autoHideDuration={2000}
            message="복사되었습니다."
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          />
        </Stack>
        <Divider />
      </Stack>
    </Box>
  );
};

export default AccountInfo;
