import React, { useState } from "react";
import { useSelector } from "../store";
import { Avatar, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import IconButton from "./common/IconButton";
import MenuDrawer from "./MenuDrawer";

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
  }
`;

const Header: React.FC = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

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
          <IconButton variant="contained" onClick={onClickMenuButton}>
            <MenuIcon />
          </IconButton>
          <Link to="/" className="header-title">
            <Typography sx={{ cursor: "pointer", fontWeight: "500" }}>
              Agora
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {isLoggedIn && <Avatar sx={{ width: "2rem", height: "2rem" }} />}
          {!isLoggedIn && (
            <IconButton variant="contained" onClick={login}>
              <LoginIcon />
            </IconButton>
          )}
        </Box>
      </Base>
    </>
  );
};

export default Header;
