import React, { useState } from "react";
import { useSelector } from "../../store";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import useMediaQuery from "../../hooks/useMediaQuery";
import ProfileModal from "../modals/ProfileModal";
import MenuModal from "../modals/MenuModal";

const Base = styled.header`
  display: flex;

  color: white;
  background-color: ${theme.primary};
  /* background-image: linear-gradient(94deg, #1ea1f7, #46cfa7); */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  height: 3.5rem; // 56px
  padding: 1rem;
  z-index: 999;

  @media screen and (min-width: ${theme.media.desktop}) {
    position: static;
  }
`;

const Header: React.FC = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);

  const onClickMenuButton = () => {
    setMenuDrawerOpen(true);
  };

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <MenuModal
        open={menuDrawerOpen}
        onClose={() => setMenuDrawerOpen(false)}
      />
      <ProfileModal
        open={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
      <Base>
        <Box
          sx={{
            width: matches ? theme.media.desktop : "100%",
            margin: matches ? "0 auto" : 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {!matches && (
              <IconButton sx={{ color: "white" }} onClick={onClickMenuButton}>
                <MenuIcon />
              </IconButton>
            )}
            <Link to="/" className="header-title">
              <Typography
                sx={{
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                }}
              >
                AGORA
              </Typography>
            </Link>
            {matches && (
              <Stack direction="row" spacing={4} sx={{ ml: 4 }}>
                <Link to="/discuss">
                  <Typography sx={{ cursor: "pointer" }}>토론</Typography>
                </Link>
                <Link to="/board">
                  <Typography sx={{ cursor: "pointer" }}>커뮤니티</Typography>
                </Link>
                <Link to="/market">
                  <Typography sx={{ cursor: "pointer" }}>마켓</Typography>
                </Link>
                <Link to="/archive">
                  <Typography sx={{ cursor: "pointer" }}>아카이브</Typography>
                </Link>
                <Link to="/mypage">
                  <Typography sx={{ cursor: "pointer" }}>마이페이지</Typography>
                </Link>
                <Link to="/account">
                  <Typography sx={{ cursor: "pointer" }}>개인정보</Typography>
                </Link>
              </Stack>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {isLoggedIn && (
              <>
                {matches && (
                  <Typography sx={{ fontWeight: 600, mr: 1 }}>
                    {username}
                  </Typography>
                )}
                <Avatar
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setProfileModalOpen(true)}
                />
              </>
            )}
            {!isLoggedIn && (
              <IconButton sx={{ color: "white" }} onClick={login}>
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Base>
    </>
  );
};

export default Header;
