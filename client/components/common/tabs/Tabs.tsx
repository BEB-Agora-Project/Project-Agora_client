import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 2.5rem; // 40px
  padding: 0 1rem;
`;

interface Props {
  children: React.ReactNode;
}

const Tabs: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Tabs;
