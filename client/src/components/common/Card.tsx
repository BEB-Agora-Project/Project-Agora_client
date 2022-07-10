import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${theme.background.primary};
  box-shadow: ${theme.elevation8};
  border-radius: 0.5rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = ({ children, width, height }) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default Card;
