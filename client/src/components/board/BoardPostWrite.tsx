import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CTAButton from "../common/CTAButton";
import ToastEditor from "../toast-editor/ToastEditor";

interface Props {
  title: string;
  contents: string;
  isLoading: boolean;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setContents: React.Dispatch<React.SetStateAction<string>>;
  onClickSubmitButton: () => void;
}

const BoardPostWrite: React.FC<Props> = ({
  title,
  contents,
  isLoading,
  onChangeTitle,
  setContents,
  onClickSubmitButton,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
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
      {title.length > 50 && (
        <Typography variant="body2" sx={{ color: theme.error }}>
          제목의 길이가 너무 깁니다. 50자 이하로 작성해주세요.
        </Typography>
      )}
      <ToastEditor setContents={setContents} />
      <CTAButton
        onClick={onClickSubmitButton}
        disabled={!title || !contents || title.length > 50}
        isLoading={isLoading}
        responsive
        width="6.5rem"
      >
        등록하기
      </CTAButton>
    </Box>
  );
};

export default BoardPostWrite;
