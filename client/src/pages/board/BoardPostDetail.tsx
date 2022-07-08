import styled from "@emotion/styled";
import { Avatar, Divider, Typography } from "@mui/material";

import React from "react";
import Button from "../../components/common/Button";
import Textarea from "../../components/common/Textarea";
import Layout from "../../components/Layout";
import CommentCard from "./BoardCommentCard";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .metadata-area {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
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

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

const BoardPostDetail: React.FC = () => {
  return (
    <Layout>
      <Base>
        <Typography variant="h6"># 게시판 이름</Typography>
        <Typography variant="h5" fontWeight={600}>
          글 제목
        </Typography>
        <div className="metadata-area">
          <div className="metadata-area-left">
            <Avatar />
            <Typography variant="body1">닉네임</Typography>
            <Typography variant="body2">2022년 0월 00일 00:00:00</Typography>
            <Typography variant="body2">조회수 1</Typography>
          </div>
          <div className="metadata-area-right">
            <Typography variant="body2">수정</Typography>
            <Divider orientation="vertical" />
            <Typography variant="body2">삭제</Typography>
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
        <Typography variant="h6">댓글 2개</Typography>
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
        <p>댓글 쓰기</p>
        <Textarea height="6rem" />
        <div className="button-wrapper">
          <Button>등록</Button>
        </div>
      </Base>
    </Layout>
  );
};

export default BoardPostDetail;
