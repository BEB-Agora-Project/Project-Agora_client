import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Card,
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { theme } from "../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

const MobileBase = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: white;
`;

const DesktopBase = styled.div`
  position: absolute;
  top: 3rem;
  right: 1rem;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<Props> = ({ open, onClose }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.tablet})`);

  return (
    <>
      {open && (
        <>
          {!matches && (
            <MobileBase>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "4.5rem",
                  p: "0.5rem",
                }}
              >
                <IconButton onClick={onClose} size="large">
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
                <Avatar sx={{ width: "8rem", height: "8rem" }} />
                <Typography variant="h4" sx={{ mt: 2 }}>
                  닉네임
                </Typography>
                <Typography variant="h5" sx={{ color: grey[400] }}>
                  nononcrust@gmail.com
                </Typography>
              </Box>
              <List sx={{ fontSize: "1.25rem" }}>
                <Divider />
                <ListItem sx={{ height: "4.5rem" }}>마이페이지</ListItem>
                <Divider />
                <ListItem sx={{ height: "4.5rem" }}>로그아웃</ListItem>
                <Divider />
              </List>
            </MobileBase>
          )}
          {matches && (
            <ClickAwayListener onClickAway={onClose}>
              <DesktopBase>
                <Card sx={{ width: "20rem", height: "30rem" }}>
                  <Stack sx={{ alignItems: "center", p: 2 }}>
                    <Avatar
                      sx={{ width: "6rem", height: "6rem", mt: 2, mb: 2 }}
                    />
                    <Typography variant="h5">닉네임</Typography>
                    <Typography variant="body1" sx={{ color: grey[400] }}>
                      nononcrust@gmail.com
                    </Typography>
                  </Stack>
                  <List>
                    <Divider />
                    <ListItem sx={{ height: "3rem" }}>마이페이지</ListItem>
                    <Divider />
                    <ListItem sx={{ height: "3rem" }}>로그아웃</ListItem>
                    <Divider />
                  </List>
                </Card>
              </DesktopBase>
            </ClickAwayListener>
          )}
        </>
      )}
    </>
  );
};

export default ProfileModal;
