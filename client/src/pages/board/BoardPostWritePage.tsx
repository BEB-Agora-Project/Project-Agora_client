import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardPostWrite from "../../components/board/BoardPostWrite";
import PaperLayout from "../../components/layout/PaperLayout";
import useProtectPage from "../../hooks/useProtectPage";
import { submitPostAPI } from "../../lib/api/board";

const BoardPostWritePage: React.FC = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

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
      console.log("BoardPostWritePage.tsx | submitPostAPI response");
      console.log(response);
      navigate(`/board/${boardId}`);
    } catch (error) {
      console.log("BoardPostWritePage.tsx | submitPostAPI error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSubmitButton = () => {
    submitPost();
  };

  useEffect(() => {
    if (isInitialRender) protectPage();
    setIsInitialRender(false);
  }, [protectPage, isInitialRender]);

  return (
    <PaperLayout>
      <BoardPostWrite
        title={title}
        contents={contents}
        isLoading={isLoading}
        onChangeTitle={onChangeTitle}
        setContents={setContents}
        onClickSubmitButton={onClickSubmitButton}
      />
    </PaperLayout>
  );
};

export default BoardPostWritePage;
