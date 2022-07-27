import React from "react";
import { Box, Input, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import ToastEditor from "../toast-editor/ToastEditor";
import CTAButton from "../common/CTAButton";

interface Props {
  title: string;
  contents: string;
  isLoading: boolean;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setContents: React.Dispatch<React.SetStateAction<string>>;
  onClickSubmitButton: () => void;
}

const BoardPostEdit: React.FC<Props> = ({
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
        수정하기
      </Typography>
      <Typography variant="h6">제목</Typography>
      <Input value={title} onChange={onChangeTitle} />
      {title.length > 50 && (
        <Typography variant="body2" sx={{ color: theme.error }}>
          제목의 길이가 너무 깁니다. 50자 이하로 작성해주세요.
        </Typography>
      )}
      {contents && (
        <ToastEditor initialValue={contents} setContents={setContents} />
      )}
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
  );
};

export default BoardPostEdit;
