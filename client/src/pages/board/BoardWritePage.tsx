import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CTAButton from "../../components/common/CTAButton";
import PaperLayout from "../../components/layout/PaperLayout";
import ToastEditor from "../../components/toast-editor/ToastEditor";
import useMediaQuery from "../../hooks/useMediaQuery";
import useProtectPage from "../../hooks/useProtectPage";
import { submitPostAPI } from "../../lib/api/board";
import { theme } from "../../styles/theme";

const Base = styled.div``;

const BoardWrite: React.FC = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const protectPage = useProtectPage();
  const params = useParams();
  const navigate = useNavigate();
  const boardId = Number(params.id);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitPost = async () => {
    setIsLoading(true);
    try {
      /*********************** API call **************************/
      const body = {
        title: title,
        content: contents,
      };

      const response = await submitPostAPI(boardId, body);
      console.log(response);
      navigate(`/board/${boardId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSubmitButton = () => {
    submitPost();
  };

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  return (
    <Base>
      <PaperLayout>
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
          <TextField
            variant="standard"
            label="제목"
            value={title}
            onChange={onChangeTitle}
          />
          <ToastEditor setContents={setContents} />
          <CTAButton
            onClick={onClickSubmitButton}
            disabled={!title || !contents}
            isLoading={isLoading}
            responsive
            width="6.5rem"
          >
            등록하기
          </CTAButton>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default BoardWrite;
