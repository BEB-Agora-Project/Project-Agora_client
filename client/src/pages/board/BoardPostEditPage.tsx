import styled from "@emotion/styled";
import { Box, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import PaperLayout from "../../components/layout/PaperLayout";
import ToastEditor from "../../components/toast-editor/ToastEditor";
import useMediaQuery from "../../hooks/useMediaQuery";
import useProtectPage from "../../hooks/useProtectPage";
import { theme } from "../../styles/theme";

const Base = styled.div`
  .button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .button {
      font-size: 1rem;
      height: auto;
      align-self: flex-end;
    }
  }
`;

const BoardPostEdit: React.FC = () => {
  const [contents, setContents] = useState("");

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const protectPage = useProtectPage();

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: matches ? 4 : 2,
          }}
        >
          <Typography variant="h5" sx={{ mt: 2 }}>
            수정하기
          </Typography>
          <Typography variant="h6">제목</Typography>
          <Input />
          <ToastEditor setContents={setContents} />
          <Button className="button">수정하기</Button>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default BoardPostEdit;
