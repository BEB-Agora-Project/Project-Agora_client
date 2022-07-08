import React, { useState } from "react";
import { useSelector } from "../store";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import MenuModal from "./MenuModal";
import IconButton from "./common/IconButton";

const Base = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.primary};

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  color: white;

  height: 3.5rem; // 56px
  padding: 1rem;
  z-index: 999;

  .header-title {
    cursor: pointer;
    font-weight: 500;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const onClickMenuButton = () => {
    setMenuOpen(true);
  };

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <Base>
      {menuOpen && (
        <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
      )}
      <div className="header-left">
        <IconButton variant="contained" onClick={onClickMenuButton}>
          <MenuIcon />
        </IconButton>
        <Link to="/" className="header-title">
          Agora
        </Link>
      </div>
      <div className="header-right">
        {isLoggedIn && <Avatar sx={{ width: "2rem", height: "2rem" }} />}
        {!isLoggedIn && (
          <IconButton variant="contained" onClick={login}>
            <LoginIcon />
          </IconButton>
        )}
      </div>
    </Base>
  );
};

export default Header;
