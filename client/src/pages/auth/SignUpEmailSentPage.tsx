import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const Base = styled.div``;

const SignUpEmailSent: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

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
            회원가입 완료
          </Typography>
          <Typography sx={{ color: grey[600] }}>
            회원가입 인증 메일이 발송되었습니다. 인증을 진행해주세요.
          </Typography>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default SignUpEmailSent;
