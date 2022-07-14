import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import Textarea from "../common/Textarea";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .button {
    height: 4rem;
    font-size: 1.25rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .button {
      align-self: flex-end;
      height: auto;
      font-size: 1rem;
    }
  }
`;

interface Props {
  onClickSubmitButton: () => void;
  onChangeCommentTextarea?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoggedIn: "init" | boolean;
  commentTextarea?: string;
}

const BoardCommentSubmit: React.FC<Props> = ({
  onClickSubmitButton,
  onChangeCommentTextarea,
  isLoggedIn,
  commentTextarea,
}) => {
  return (
    <Base>
      <Typography variant="h6">댓글 쓰기</Typography>
      <Textarea
        value={commentTextarea}
        onChange={onChangeCommentTextarea}
        height="6rem"
        placeholder={isLoggedIn ? "" : "로그인 후 이용하실 수 있습니다."}
      />
      <Button className="button" onClick={onClickSubmitButton}>
        등록
      </Button>
    </Base>
  );
};

export default BoardCommentSubmit;
