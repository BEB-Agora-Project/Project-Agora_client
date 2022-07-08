import styled from "@emotion/styled";
import {
  Input,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
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
    margin: 0 auto;
    width: 60rem;

    .contents {
      padding: 2rem;
    }

    .button {
      height: 4rem;
      width: 8rem;
      align-self: flex-end;
    }
  }
`;

const BoardWrite: React.FC = () => {
  const [boardList, setBoardList] = useState("1");
  const [contents, setContents] = useState("");

  const onChangeBoardSelect = (event: SelectChangeEvent) => {
    setBoardList(event.target.value);
  };

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  return (
    <Layout>
      <Base>
        <Paper className="contents" variant="outlined" square>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            새 글 작성
          </Typography>
          <Select value={boardList} onChange={onChangeBoardSelect}>
            <MenuItem value={"1"}>게시판1</MenuItem>
            <MenuItem value={"2"}>게시판2</MenuItem>
            <MenuItem value={"3"}>게시판3</MenuItem>
          </Select>
          <Typography variant="h6">제목</Typography>
          <Input />
          <ToastEditor setContents={setContents} />
          <Button className="button">등록하기</Button>
        </Paper>
      </Base>
    </Layout>
  );
};

export default BoardWrite;
