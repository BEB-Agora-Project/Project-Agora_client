import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { submitDiscussPostAPI } from "../../lib/api/discuss";
import { mapPositionToNumber } from "../../lib/utils";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import Textarea from "../common/Textarea";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

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
  fetchDiscussPosts: () => void;
}

const DiscussPostSubmit: React.FC<Props> = ({ fetchDiscussPosts }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [searchParams] = useSearchParams();

  const position = searchParams.get("position") || undefined;
  console.log(position);

  const submitDiscussPost = async () => {
    if (!title || !contents) return;

    /*********************** API call **************************/
    try {
      const body = {
        opinion: String(mapPositionToNumber(position)) || "1",
        title: title,
        content: contents,
      };
      const response = await submitDiscussPostAPI(body);
      console.log(response);

      setTitle("");
      setContents("");

      fetchDiscussPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmitButton = async () => {
    submitDiscussPost();
  };

  return (
    <Base>
      <Typography variant="h6">의견 남기기</Typography>
      <TextField
        variant="standard"
        label="제목"
        value={title}
        onChange={onChangeTitle}
      />
      <Textarea
        height="6rem"
        placeholder={isLoggedIn ? "" : "로그인 후 이용하실 수 있습니다."}
        value={contents}
        onChange={onChangeContents}
      />
      <Button className="button" onClick={onClickSubmitButton}>
        등록
      </Button>
    </Base>
  );
};

export default DiscussPostSubmit;
