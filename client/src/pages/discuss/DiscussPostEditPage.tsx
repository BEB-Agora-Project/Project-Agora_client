import styled from "@emotion/styled";
import { Box, Input, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import Textarea from "../../components/common/Textarea";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import useProtectPage from "../../hooks/useProtectPage";
import {
  getDiscussPostDetailAPI,
  updateDiscussPostAPI,
} from "../../lib/api/discuss";
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

const DiscussPostEditPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [discussPostDetail, setDiscussPostDetail] =
    useState<GetDiscussPostDetailAPIResponseType>();

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const protectPage = useProtectPage();
  const params = useParams();
  const postId = Number(params.id);
  const navigate = useNavigate();

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const fetchDiscussPostDetail = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await getDiscussPostDetailAPI(postId);
      console.log("DiscussPostEditPage.tsx | getDiscussPostDetailAPI response");
      console.log(response);
      setDiscussPostDetail(response.data);
    } catch (error) {
      console.log("DiscussPostEditPage.tsx | getDiscussPostDetailAPI error");
      console.log(error);
    }
  }, [postId]);

  const updateDiscussPost = async () => {
    /*********************** API call **************************/
    try {
      const body = {
        opinion: discussPostDetail?.opinion || 1,
        title: title,
        content: contents,
      };
      const response = await updateDiscussPostAPI(postId, body);
      console.log("DiscussPostEditPage.tsx | updateDiscussPostAPI response");
      console.log(response);

      navigate(-1);
    } catch (error) {
      console.log("DiscussPostEditPage.tsx | updateDiscussPostAPI error");
      console.log(error);
    }
  };

  const onClickSubmitButton = () => {
    updateDiscussPost();
  };

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  useEffect(() => {
    fetchDiscussPostDetail();

    setTitle(discussPostDetail?.title || "");
    setContents(discussPostDetail?.content || "");
  }, [
    discussPostDetail?.content,
    discussPostDetail?.title,
    fetchDiscussPostDetail,
  ]);

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
          <Textarea
            value={contents}
            onChange={onChangeContents}
            height="12rem"
          />
          <Button className="button" onClick={onClickSubmitButton}>
            수정하기
          </Button>
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default DiscussPostEditPage;
