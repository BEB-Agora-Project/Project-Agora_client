import React, { useState } from "react";
import { useSelector } from "../store";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

import MenuDrawer from "./MenuDrawer";
import useMediaQuery from "../hooks/useMediaQuery";

const Base = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  background-color: ${theme.primary};
  box-shadow: ${theme.elevation4};

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  height: 3.5rem; // 56px
  padding: 1rem;
  z-index: 999;

  @media screen and (min-width: ${theme.media.desktop}) {
    position: static;

    .header-title {
      margin-left: 1rem;
    }
  }
`;

const Header: React.FC = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const onClickMenuButton = () => {
    setMenuDrawerOpen(true);
  };

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      {menuDrawerOpen && (
        <MenuDrawer
          open={menuDrawerOpen}
          onClose={() => setMenuDrawerOpen(false)}
        />
      )}
      <Base>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {!matches && (
            <IconButton sx={{ color: "white" }} onClick={onClickMenuButton}>
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/" className="header-title">
            <Typography
              sx={{ cursor: "pointer", fontWeight: "600", fontSize: "1.25rem" }}
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
            <Avatar sx={{ width: "2rem", height: "2rem", cursor: "pointer" }} />
          )}
          {!isLoggedIn && (
            <IconButton sx={{ color: "white" }} onClick={login}>
              <LoginIcon />
            </IconButton>
          )}
        </Box>
      </Base>
    </>
  );
};

export default Header;
