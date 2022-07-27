import React, { useEffect } from "react";
import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { theme } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { getBadgeImageSrcById, removeCookie } from "../../lib/utils";

const Base = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: white;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileProfileModal: React.FC<Props> = ({ open, onClose }) => {
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  const profileImage = useSelector((state) => state.user.profileImage);
  const currentBadge = useSelector((state) => state.user.currentBadge);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickMyPageButton = () => {
    navigate("/mypage");
    onClose();
  };

  const onClickAccountButton = () => {
    navigate("/account");
    onClose();
  };

  const onClickLogOutButton = () => {
    dispatch(userActions.setUserLoggedOut());
    removeCookie("accessToken");
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      {open && (
        <Base>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "4.5rem",
              p: "0.5rem",
            }}
          >
            <IconButton onClick={onClose} size="large" aria-label="close-modal">
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: "1rem",
            }}
          >
            <Avatar src={profileImage} sx={{ width: "8rem", height: "8rem" }} />
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ alignItems: "center", mt: 2 }}
            >
              <Typography variant="h4">{username}</Typography>
              {currentBadge ? (
                <Avatar
                  src={getBadgeImageSrcById(Number(currentBadge))}
                  sx={{ width: "2.5rem", height: "2.5rem" }}
                />
              ) : null}
            </Stack>
            <Typography variant="h5" sx={{ color: grey[400] }}>
              {email}
            </Typography>
            <Typography sx={{ color: theme.primary }}>
              보유중인 토큰: {token}개
            </Typography>
          </Box>
          <List sx={{ fontSize: "1.25rem" }}>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ height: "4.5rem" }}
                onClick={onClickMyPageButton}
              >
                마이페이지
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ height: "4.5rem" }}
                onClick={onClickAccountButton}
              >
                개인정보 관리
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                sx={{ height: "4.5rem" }}
                onClick={onClickLogOutButton}
              >
                로그아웃
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Base>
      )}
    </>
  );
};

export default MobileProfileModal;
