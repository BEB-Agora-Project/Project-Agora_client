import React from "react";
import styled, { css } from "styled-components";
import palette from "../../../styles/palette";

interface ContainerProps {
  startIcon?: React.ReactNode;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${palette.gray[500]};
  height: 2.5rem; // 40px
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[100]};
  }

  ${({ startIcon }) =>
    startIcon &&
    css`
      padding-left: 0.5rem;
    `}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

const MenuItem: React.FC<Props> = ({ children, startIcon, ...props }) => {
  return (
    <Container startIcon={startIcon} {...props}>
      {startIcon}
      {children}
    </Container>
  );
};

export default MenuItem;
