import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PaperLayout from "../../components/layout/PaperLayout";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CreateIcon from "@mui/icons-material/Create";
import BoardPostCard from "../../components/board/BoardPostCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import useProtectPage from "../../hooks/useProtectPage";
import { getMyPageInfoAPI, updateUsernameAPI } from "../../lib/api/user";

const Base = styled.div``;

const Mypage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [myPageInfo, setMyPageInfo] = useState<GetMyPageInfoAPIResponseType>();

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const protectPage = useProtectPage();

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  const onClickEditButton = () => {
    setEditMode(true);
  };

  const onClickCancelButton = () => {
    setEditMode(false);
  };

  const fetchMyPageInfo = async () => {
    /*********************** API call **************************/
    try {
      const response = await getMyPageInfoAPI();
      console.log(response);
      setMyPageInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsername = async () => {
    /*********************** API call **************************/
    try {
      const body = {
        username: username,
      };

      const response = await updateUsernameAPI(body);
      console.log(response);
      fetchMyPageInfo();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmitButton = () => {
    updateUsername();
    alert("변경되었습니다.");
    setEditMode(false);
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  useEffect(() => {
    fetchMyPageInfo();
  }, []);

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box sx={boxStyle}>
          <Stack sx={{ alignItems: "center", mt: 4 }}>
            <Avatar sx={{ width: "8rem", height: "8rem" }} />
            {!editMode && (
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  mt: 2,
                  gap: 1,
                  position: "relative",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {myPageInfo?.userinfo.username}
                </Typography>
                <IconButton
                  sx={{ position: "absolute", right: -45 }}
                  onClick={onClickEditButton}
                >
                  <CreateIcon />
                </IconButton>
              </Stack>
            )}
            {editMode && (
              <Stack
                direction="row"
                sx={{ alignItems: "center", mt: 2, gap: 1 }}
              >
                <TextField
                  variant="standard"
                  autoFocus
                  value={username}
                  onChange={onChangeUsername}
                />
                <IconButton
                  sx={{ color: theme.primary }}
                  onClick={onClickSubmitButton}
                >
                  <CheckCircleIcon />
                </IconButton>
                <IconButton onClick={onClickCancelButton}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            )}
            <Typography sx={{ color: theme.primary }}>
              보유한 토큰: {myPageInfo?.userinfo.current_token}개
            </Typography>
          </Stack>
        </Box>

        <Box sx={boxStyle}>
          <Typography variant="h5">내가 작성한 글</Typography>
        </Box>
        <Divider />
        {myPageInfo?.myboards.map((post, index) => (
          <BoardPostCard
            postId={post.id}
            title="내가 작성한 글"
            username={myPageInfo.userinfo.username}
            createdAt={post.createdAt}
            views={1111}
            likes={2222}
            commentCount={1222}
            key={index}
          />
        ))}
      </PaperLayout>
    </Base>
  );
};

export default Mypage;
