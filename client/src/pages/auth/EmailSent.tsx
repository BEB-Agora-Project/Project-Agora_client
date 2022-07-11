import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import PaperLayout from "../../components/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const Base = styled.div``;

const EmailSent: React.FC = () => {
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
            비밀번호 재설정
          </Typography>
          <Typography sx={{ color: grey[600] }}>
            비밀번호 재설정 메일이 발송되었습니다. 10분 안에 링크를 클릭하면
            비밀번호를 변경하실 수 있습니다.
          </Typography>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default EmailSent;
