import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { theme } from "../../styles/theme";

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
      width: 37.5rem;
      padding: 2rem;
    }
  }
`;

const EmailSent: React.FC = () => {
  return (
    <Base>
      <Paper className="section">
        <Typography variant="h5" sx={{ mt: 2 }}>
          비밀번호 재설정
        </Typography>
        <Typography sx={{ color: grey[600] }}>
          비밀번호 재설정 메일이 발송되었습니다. 10분 안에 링크를 클릭하면
          비밀번호를 변경하실 수 있습니다.
        </Typography>
      </Paper>
    </Base>
  );
};

export default EmailSent;
