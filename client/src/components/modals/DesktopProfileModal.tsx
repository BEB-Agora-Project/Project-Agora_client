import React from "react";
import styled from "@emotion/styled";
import {
  Avatar,
  Card,
  ClickAwayListener,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "../../store";
import { userActions } from "../../store/userSlice";
import { getBadgeImageSrcById, removeCookie } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  position: absolute;
  top: 3rem;
  right: 1rem;
  z-index: 1000;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const DesktopProfileModal: React.FC<Props> = ({ open, onClose }) => {
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

  return (
    <>
      {open && (
        <ClickAwayListener onClickAway={onClose}>
          <Base>
            <Card sx={{ width: "20rem", height: "30rem" }}>
              <Stack sx={{ alignItems: "center", p: 2 }}>
                <Avatar
                  src={profileImage}
                  sx={{
                    width: "6rem",
                    height: "6rem",
                    mt: 2,
                    mb: 2,
                    border: `1px solid ${grey[200]}`,
                  }}
                />
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{ alignItems: "center" }}
                >
                  <Typography variant="h5">{username}</Typography>
                  {currentBadge && (
                    <Avatar
                      src={getBadgeImageSrcById(Number(currentBadge))}
                      sx={{ width: "2rem", height: "2rem" }}
                    />
                  )}
                </Stack>
                <Typography variant="body1" sx={{ color: grey[400] }}>
                  {email}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.primary }}>
                  보유중인 토큰: {token}개
                </Typography>
              </Stack>
              <List>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ height: "3rem" }}
                    onClick={onClickMyPageButton}
                  >
                    마이페이지
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ height: "3rem" }}
                    onClick={onClickAccountButton}
                  >
                    개인정보 관리
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ height: "3rem" }}
                    onClick={onClickLogOutButton}
                  >
                    로그아웃
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
            </Card>
          </Base>
        </ClickAwayListener>
      )}
    </>
  );
};

export default DesktopProfileModal;
