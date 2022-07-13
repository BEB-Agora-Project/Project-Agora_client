import styled from "@emotion/styled";
import {
  Box,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
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

const BoardWrite: React.FC = () => {
  const [boardList, setBoardList] = useState("1");
  const [contents, setContents] = useState("");

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const protectPage = useProtectPage();

  const onChangeBoardSelect = (event: SelectChangeEvent) => {
    setBoardList(event.target.value);
  };

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
            새 글 작성
          </Typography>
          <Select value={boardList} onChange={onChangeBoardSelect}>
            <MenuItem value="1">게시판1</MenuItem>
            <MenuItem value="2">게시판2</MenuItem>
            <MenuItem value="3">게시판3</MenuItem>
          </Select>
          <Typography variant="h6">제목</Typography>
          <Input />
          <ToastEditor setContents={setContents} />
          <Button className="button">등록하기</Button>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default BoardWrite;
