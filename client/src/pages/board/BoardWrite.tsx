import styled from "@emotion/styled";
import {
  Input,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
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
      margin: 0 auto;
      width: 50rem;
      padding: 2rem;
    }

    .button {
      font-size: 1rem;
      height: auto;
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
  );
};

export default BoardWrite;
