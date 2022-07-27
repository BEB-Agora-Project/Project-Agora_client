import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardPostEdit from "../../components/board/BoardPostEdit";
import PaperLayout from "../../components/layout/PaperLayout";
import useProtectPage from "../../hooks/useProtectPage";
import { getPostDetailAPI, updatePostAPI } from "../../lib/api/board";

const BoardPostEditPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [postDetail, setPostDetail] = useState<PostDetailType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  console.log(contents);

  const protectPage = useProtectPage();
  const params = useParams();
  const postId = Number(params.id);
  const navigate = useNavigate();

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const fetchPostDetail = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getPostDetailAPI(postId);
      console.log("BoardPostEditPage.tsx | getPostDetailAPI response");
      console.log(response);
      setPostDetail(response.data.data);
    } catch (error) {
      console.log("BoardPostEditPage.tsx | getPostDetailAPI error");
      console.log(error);
    }
  }, [postId]);

  const updatePost = async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const body = {
        title: title,
        content: contents,
      };
      const response = await updatePostAPI(postId, body);
      console.log("BoardPostEditPage.tsx | updatePostAPI response");
      console.log(response);

      navigate(-1);
    } catch (error) {
      console.log("BoardPostEditPage.tsx | updatePostAPI error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSubmitButton = () => {
    if (!title || !contents) return alert("제목과 내용을 입력해주세요.");

    updatePost();
  };

  useEffect(() => {
    if (isInitialRender) protectPage();
    setIsInitialRender(false);
  }, [protectPage, isInitialRender]);

  useEffect(() => {
    fetchPostDetail();

    setTitle(postDetail?.title || "");
    setContents(postDetail?.content || "");
  }, [fetchPostDetail, postDetail?.content, postDetail?.title]);

  return (
    <PaperLayout>
      <BoardPostEdit
        title={title}
        contents={contents}
        isLoading={isLoading}
        setContents={setContents}
        onChangeTitle={onChangeTitle}
        onClickSubmitButton={onClickSubmitButton}
      />
    </PaperLayout>
  );
};

export default BoardPostEditPage;
