import styled from "@emotion/styled";
import {
  Divider,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import LinkIcon from "@mui/icons-material/Link";
import useProtectPage from "../../hooks/useProtectPage";

const Base = styled.div`
  background-color: ${grey[100]};

  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
    min-height: calc(100vh - 3.5rem);
    padding: 1rem;
    gap: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .section {
      margin: 0 auto;
      width: 50rem;
      padding: 2rem;
    }
  }
`;

const Account: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const protectPage = useProtectPage();

  const onClickCopyWalletAddress = () => {
    setSnackbarOpen(true);
  };

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  return (
    <Base>
      <Paper className="section" variant="outlined" square>
        <Typography variant="h5" sx={{ mt: 2 }}>
          개인정보 관리
        </Typography>
        <Typography>이메일</Typography>
        <Stack spacing={1}>
          <Typography sx={{ color: grey[400] }}>
            nononcrust@gmail.com
          </Typography>
          <Divider />
        </Stack>
        <Typography>가입일</Typography>
        <Stack spacing={1}>
          <Typography>2022년 7월 9일</Typography>
          <Divider />
        </Stack>
        <Typography>지갑 주소</Typography>
        <Stack spacing={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>23819230ASJDBA123u189</Typography>
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
      </Paper>
    </Base>
  );
};

export default Account;
