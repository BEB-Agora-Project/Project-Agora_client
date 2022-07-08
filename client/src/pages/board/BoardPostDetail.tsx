import styled from "@emotion/styled";
import { Avatar, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import Button from "../../components/common/Button";
import Textarea from "../../components/common/Textarea";
import Layout from "../../components/Layout";
import CommentCard from "../../components/BoardCommentCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../styles/theme";
import palette from "../../styles/palette";
import { useLocation, useNavigate } from "react-router-dom";

const Base = styled.div`
  display: flex;
  flex-direction: column;

  .metadata-area {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
  }

  .views,
  .created-at {
    font-size: 0.875rem;
  }

  .metadata-area-left,
  .metadata-area-right {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .likes-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .contents {
    padding: 1rem;
  }

  .submit-comment-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .button {
    height: 4rem;
    font-size: 1.25rem;
  }

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 1rem auto;
    width: 37.5rem;
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    width: 50rem;
  }
`;

const BoardPostDetail: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const onClickLikeButton = () => {};

  const onClickDislikeButton = () => {};

  const onClickEditButton = () => {
    navigate(`${location.pathname}/edit`);
  };

  const onClickDeleteButton = () => {
    window.confirm("삭제하시겠습니까?");
  };

  return (
    <Layout>
      <Base>
        <Typography variant="h6" padding="1rem" color={palette.gray[500]}>
          # 게시판 이름
        </Typography>
        <Typography variant="h5" fontWeight={600} padding="1rem" pb="0">
          글 제목
        </Typography>
        <div className="metadata-area">
          <div className="metadata-area-left">
            <Avatar />
            <Typography variant="body1">닉네임</Typography>
            <Typography variant="body2" color={palette.gray[400]}>
              조회수 1
            </Typography>
          </div>
          <div className="metadata-area-right">
            <Typography variant="body2" onClick={onClickEditButton}>
              수정
            </Typography>
            <Typography variant="body2" onClick={onClickDeleteButton}>
              삭제
            </Typography>
          </div>
        </div>
        <Divider />
        <div className="contents">
          방황하였으며, 피고 하였으며, 천하를 낙원을 피부가 실로 힘있다. 시들어
          천하를 기관과 구하지 이상 고행을 싶이 끓는 있음으로써 사막이다.
          풍부하게 않는 그들은 황금시대를 교향악이다. 있는 꾸며 때까지 보배를
          피는 같이, 커다란 것이다. 가는 불러 미인을 그들의 있는가? 피어나는
          기관과 맺어, 열락의 쓸쓸하랴?
        </div>
        <div className="likes-wrapper">
          <IconButton onClick={onClickLikeButton}>
            <KeyboardArrowUpIcon />
          </IconButton>
          <span className="post-detail-likes">{1}</span>
          <IconButton onClick={onClickDislikeButton}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        <Typography variant="h5" fontWeight={600} p="1rem">
          댓글 2개
        </Typography>
        <CommentCard
          nickname="닉네임"
          createdAt="2022년 00월 00일 00:00:00"
          commentContents="댓글 내용"
          commentId={1}
        />
        <CommentCard
          nickname="닉네임"
          createdAt="2022년 00월 00일 00:00:00"
          commentContents="댓글 내용"
          commentId={1}
        />
        <CommentCard
          nickname="닉네임"
          createdAt="2022년 00월 00일 00:00:00"
          commentContents="댓글 내용"
          commentId={1}
        />
        <div className="submit-comment-area">
          <Typography fontWeight={600}>댓글 쓰기</Typography>
          <Textarea height="6rem" />
          <Button className="button">등록</Button>
        </div>
      </Base>
    </Layout>
  );
};

export default BoardPostDetail;
