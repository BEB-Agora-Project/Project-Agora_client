import React from "react";
import { userActions } from "../store/useSlice";
import { useDispatch, useSelector } from "../store";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

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
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(userActions.setLoggedIn());
  };

  return (
    <Base>
      <div className="header-left">
        <IconButton sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
        <Link to="/" className="header-title">
          Agora
        </Link>
      </div>
      <div className="header-right">
        {isLoggedIn && <Avatar src="/nonon.png" alt="" />}
        {!isLoggedIn && (
          <IconButton sx={{ color: "white" }} onClick={login}>
            <LoginIcon />
          </IconButton>
        )}
      </div>
    </Base>
  );
};

export default Header;
