import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import React from "react";
import { theme } from "../../styles/theme";

interface ContainerProps {
  active?: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  color: ${grey[500]};

  background-color: ${({ active }) => active && theme.primaryLight};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

const ToggleButton: React.FC<Props> = ({ children, active, ...props }) => {
  return (
    <Container active={active} {...props}>
      {children}
    </Container>
  );
};

export default ToggleButton;
