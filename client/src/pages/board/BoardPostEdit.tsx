import styled from "@emotion/styled";
import { Input, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import ToastEditor from "../../components/ToastEditor";
import useProtectPage from "../../hooks/useProtectPage";
import { theme } from "../../styles/theme";

const Base = styled.div`
  background-color: ${grey[100]};

  .section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: white;
    min-height: calc(100vh - 3.5rem);
  }

  .button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .section {
      margin: 0rem auto;
      width: 50rem;
    }

    .button {
      font-size: 1rem;
      height: auto;
      align-self: flex-end;
    }
  }
`;

const BoardPostEdit: React.FC = () => {
  const [contents, setContents] = useState("");

  const protectPage = useProtectPage();

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  return (
    <Base>
      <Paper className="section" variant="outlined" square>
        <Typography variant="h5" sx={{ mt: 2 }}>
          수정하기
        </Typography>
        <Typography variant="h6">제목</Typography>
        <Input />
        <ToastEditor setContents={setContents} />
        <Button className="button">수정하기</Button>
      </Paper>
    </Base>
  );
};

export default BoardPostEdit;
