import React, { useEffect, useRef, useState } from "react";
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
import { useSelector } from "../../store";
import { grey } from "@mui/material/colors";
import ProfileImageEditButton from "../../components/mypage/ProfileImageEditButton";

const Base = styled.div``;

const Mypage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [myPageInfo, setMyPageInfo] = useState<GetMyPageInfoAPIResponseType>();

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);

  const protectPage = useProtectPage();

  const profileImageInputRef = useRef<HTMLInputElement | null>(null);

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
        username: newUsername,
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
    setNewUsername(event.target.value);
  };

  const onChangeProfileImageInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.files);

    // api call

    // refetch
  };

  const onClickEditProfileImageButton = () => {
    if (!profileImageInputRef.current) return;

    console.log("1111");

    profileImageInputRef.current.click();
  };

  useEffect(() => {
    console.log("protecting");
    protectPage();
  }, [protectPage]);

  useEffect(() => {
    fetchMyPageInfo();
  }, []);

  return (
    <Base>
      <PaperLayout>
        <Box sx={boxStyle}>
          <Stack sx={{ alignItems: "center", mt: 4 }}>
            <Box sx={{ position: "relative" }}>
              <Avatar sx={{ width: "8rem", height: "8rem" }} />
              <ProfileImageEditButton
                onClickProfileImageEditButton={onClickEditProfileImageButton}
              />
              <input
                type="file"
                style={{ display: "none" }}
                ref={profileImageInputRef}
                onChange={onChangeProfileImageInput}
              />
            </Box>
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
                  {username}
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
                  value={newUsername}
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
            <Typography sx={{ color: grey[500] }}>{email}</Typography>
            <Typography sx={{ color: theme.primary }}>
              보유중인 토큰: {token}개
            </Typography>
          </Stack>
        </Box>

        <Box sx={boxStyle}>
          <Typography variant="h5">내가 작성한 글</Typography>
        </Box>
        <Divider />
        {myPageInfo?.myposts.map((post, index) => (
          <BoardPostCard
            postId={post.id}
            title={post.title}
            username={username}
            createdAt={post.created_at}
            views={post.hit}
            likes={post.up}
            commentCount={post.Comments.length}
            key={index}
          />
        ))}
      </PaperLayout>
    </Base>
  );
};

export default Mypage;
