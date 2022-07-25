import React from "react";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  border: 1px solid ${grey[300]};
  border-radius: 0.5rem;
  overflow: hidden;
`;

interface Props {
  children: React.ReactNode;
}

const ToggleButtonGroup: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ToggleButtonGroup;
