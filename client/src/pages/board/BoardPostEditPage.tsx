import styled from "@emotion/styled";
import { Box, Input, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CTAButton from "../../components/common/CTAButton";
import PaperLayout from "../../components/layout/PaperLayout";
import ToastEditor from "../../components/toast-editor/ToastEditor";
import useMediaQuery from "../../hooks/useMediaQuery";
import useProtectPage from "../../hooks/useProtectPage";
import { getPostDetailAPI, updatePostAPI } from "../../lib/api/board";
import { theme } from "../../styles/theme";

const Base = styled.div``;

const BoardPostEdit: React.FC = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [postDetail, setPostDetail] = useState<PostDetailType>();
  const [isLoading, setIsLoading] = useState(false);

  console.log(contents);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
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
    protectPage();
  }, [protectPage]);

  useEffect(() => {
    fetchPostDetail();

    setTitle(postDetail?.title || "");
    setContents(postDetail?.content || "");
  }, [fetchPostDetail, postDetail?.content, postDetail?.title]);

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
            수정하기
          </Typography>
          <Typography variant="h6">제목</Typography>
          <Input value={title} onChange={onChangeTitle} />
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
      </PaperLayout>
    </Base>
  );
};

export default BoardPostEdit;
