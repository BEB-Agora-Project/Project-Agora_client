import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Base = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Base>
      <Header />
      <div className="contents">{children}</div>
    </Base>
  );
};

export default Layout;
