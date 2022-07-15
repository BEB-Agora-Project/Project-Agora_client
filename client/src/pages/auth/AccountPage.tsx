import styled from "@emotion/styled";
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
import React, { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import LinkIcon from "@mui/icons-material/Link";
import useProtectPage from "../../hooks/useProtectPage";
import ChangePassword from "../../components/account/ChangePassword";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getMyPageInfoAPI } from "../../lib/api/user";

const Base = styled.div``;

const Account: React.FC = () => {
  const [myPageInfo, setMyPageInfo] = useState<GetMyPageInfoAPIResponseType>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  console.log(myPageInfo);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const protectPage = useProtectPage();

  const onClickCopyWalletAddress = async () => {
    setSnackbarOpen(true);
    await navigator.clipboard.writeText("anfeeuianfia11231");
  };

  const onClickWithDrawalButton = () => {
    window.confirm("한번 탈퇴하면 되돌릴 수 없습니다. 탈퇴하시겠습니까?");
  };

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  const fetchMyPageInfo = async () => {
    /*********************** API call **************************/
    try {
      const response = await getMyPageInfoAPI();
      console.log(response);
      setMyPageInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyPageInfo();
  }, []);

  return (
    <Base>
      <PaperLayout width="40rem">
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
            <Typography>2222년 22월 22일</Typography>
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
          <ChangePassword />
          <Typography
            sx={{
              alignSelf: "flex-end",
              mt: 8,
              color: grey[300],
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={onClickWithDrawalButton}
          >
            회원탈퇴
          </Typography>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default Account;
