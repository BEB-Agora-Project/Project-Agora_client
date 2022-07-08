import styled from "@emotion/styled";
import { Input, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Layout from "../../components/Layout";
import ToastEditor from "../../components/ToastEditor";
import { theme } from "../../styles/theme";

const Base = styled.div`
  .contents {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: white;
  }

  .button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    margin: 0rem auto;
    width: 60rem;

    .button {
      width: 8rem;
      align-self: flex-end;
    }
  }
`;

const BoardPostEdit: React.FC = () => {
  const [contents, setContents] = useState("");

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <Layout>
      <Base>
        <Paper className="contents" variant="outlined" square>
          <Typography variant="h5">수정하기</Typography>
          <Typography variant="h6">제목</Typography>
          <Input />
          <ToastEditor setContents={setContents} />
          <Button className="button">수정하기</Button>
        </Paper>
      </Base>
    </Layout>
  );
};

export default BoardPostEdit;
