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
import { FAKE_ARRAY } from "../../lib/dummyData";
import { getLastPathname } from "../../lib/utils";
import { theme } from "../../styles/theme";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import Button from "../../components/common/Button";
import FloatingActionButton from "../../components/common/FloatinActionButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import PaperLayout from "../../components/PaperLayout";
import { grey } from "@mui/material/colors";

const Base = styled.div`
  background-color: ${grey[100]};
`;

const BoardPostList: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(1);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

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
    <Base>
      <PaperLayout width="48rem">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: matches ? 4 : 2,
            mt: 2,
          }}
        >
          <Typography variant="h5">
            게시판{getLastPathname(location.pathname)}
          </Typography>
          <Button onClick={onClickPostButton}>글쓰기</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderBottom: 1,
            borderColor: "divider",
            justifyContent: "space-between",
          }}
        >
          <Tabs value={tabValue} onChange={onChangeTab}>
            <Tab label="전체" sx={{ fontSize: "1rem" }} />
            <Tab label="인기글" sx={{ fontSize: "1rem" }} />
          </Tabs>
        </Box>
        {FAKE_ARRAY.map((_, index) => (
          <BoardPostCard
            key={index}
            postId={1}
            title="글제목 123"
            commentCount={1}
            username="닉네임"
            createdAt="2022.07.09 02:22"
            views={11}
            likes={11}
            image
          />
        ))}
      </PaperLayout>
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
          {!matches && (
            <FloatingActionButton shape="rounded" onClick={onClickPostButton}>
              <CreateIcon />
            </FloatingActionButton>
          )}
        </Box>
      </Paper>
    </Base>
  );
};

export default BoardPostList;
