import styled from "@emotion/styled";
import {
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/common/Button";
import Layout from "../../components/Layout";
import ToastEditor from "../../components/ToastEditor";
import { theme } from "../../styles/theme";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .button {
    height: 4rem;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 1rem auto;
    width: 37.5rem;
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    width: 50rem;
  }
`;

const BoardWrite: React.FC = () => {
  const [boardList, setBoardList] = useState("1");

  const onChangeBoardSelect = (event: SelectChangeEvent) => {
    setBoardList(event.target.value);
  };

  return (
    <Layout>
      <Base>
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
        <ToastEditor />
        <Button className="button">등록하기</Button>
      </Base>
    </Layout>
  );
};

export default BoardWrite;
