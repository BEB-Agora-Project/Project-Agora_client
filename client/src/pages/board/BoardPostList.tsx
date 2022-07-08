import styled from "@emotion/styled";
import {
  Box,
  Input,
  Pagination,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardPostCard from "../../components/BoardPostCard";
import Layout from "../../components/Layout";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { getLastPathname } from "../../lib/utils";
import { theme } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import Button from "../../components/common/Button";
import FloatingActionButton from "../../components/common/FloatinActionButton";
import palette from "../../styles/palette";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${palette.gray[100]};

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
  }

  .search-input-wrapper {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    margin: 0 auto;
    width: 60rem;

    .title-wrapper {
      padding: 2rem;
    }
  }
`;

const BoardPostList: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const onClickPostButton = () => {
    navigate(`${location.pathname}/write`);
  };

  return (
    <Layout>
      <Base>
        <Paper variant="outlined" square>
          <div className="title-wrapper">
            <Typography variant="h5" fontWeight={600}>
              게시판{getLastPathname(location.pathname)}
            </Typography>
            <Button onClick={onClickPostButton}>글쓰기</Button>
          </div>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tabValue} onChange={onChangeTab}>
              <Tab label="전체" />
              <Tab label="인기글" />
            </Tabs>
          </Box>
          {FAKE_ARRAY.map((_, index) => (
            <BoardPostCard
              key={index}
              postId={1}
              title="글제목"
              commentCount={1}
              nickname="닉네임"
              createdAt="0000년 00월 00일"
              views={11}
              likes={11}
            />
          ))}
        </Paper>
        <Paper variant="outlined" square sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination count={10} page={page} onChange={onChangePage} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Input />
              <SearchIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
          <Box sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
            <FloatingActionButton shape="rounded" onClick={onClickPostButton}>
              <CreateIcon />
            </FloatingActionButton>
          </Box>
        </Paper>
      </Base>
    </Layout>
  );
};

export default BoardPostList;
