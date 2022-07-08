import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import IconButton from "../common/buttons/IconButton";
import { MdMenu, MdLogin } from "react-icons/md";
import { useDispatch, useSelector } from "../../store";
import { userActions } from "../../store/userSlice";
import Link from "next/link";

const Base = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  color: white;
  background-color: ${theme.primary};
  height: 3.5rem; // 56px
  padding: 1rem;
  box-shadow: ${theme.elevation4};
  z-index: 999;

  .header-title {
    cursor: pointer;
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

  @media screen and (min-width: ${theme.media.tablet}) {
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    position: relative;
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
        <IconButton variant="contained">
          <MdMenu color="white" size="1.5rem" />
        </IconButton>
        <Link href="/" className="header-title">
          <a>Agora</a>
        </Link>
      </div>
      <div className="header-right">
        {isLoggedIn && <Avatar src="/nonon.png" alt="" size="large" />}
        {!isLoggedIn && (
          <IconButton variant="contained" onClick={login}>
            <MdLogin color="white" size="1.5rem" />
          </IconButton>
        )}
      </div>
    </Base>
  );
};

export default Header;
