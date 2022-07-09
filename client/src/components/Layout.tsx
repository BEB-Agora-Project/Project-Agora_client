import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import { grey } from "@mui/material/colors";

const Base = styled.main`
  display: flex;
  flex-direction: column;

  .contents {
    background-color: ${grey[100]};
    min-height: calc(100vh - 3.5rem);
  }
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
