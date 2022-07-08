import styled from "@emotion/styled";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import BoardPostCard from "../../components/BoardPostCard";
import Layout from "../../components/Layout";
import { FAKE_ARRAY } from "../../lib/dummyData";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`;

const BoardPostList: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Layout>
      <Base>
        <Typography variant="h5" fontWeight={600}>
          자유게시판
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="전체" />
            <Tab label="인기글" />
          </Tabs>
        </Box>
        {FAKE_ARRAY.map(() => (
          <BoardPostCard
            postId={1}
            title="글제목"
            commentCount={1}
            nickname="닉네임"
            createdAt="0000년 00월 00일"
            views={11}
            likes={11}
          />
        ))}
      </Base>
    </Layout>
  );
};

export default BoardPostList;
