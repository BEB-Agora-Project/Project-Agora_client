import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

interface ContainerProps {
  active?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: white;
  font-weight: 400;
  cursor: pointer;

  min-width: 6rem;

  &:hover {
    border-bottom: 3px solid ${theme.primaryLight};
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 3px solid ${theme.primary};
      font-weight: 500;
      &:hover {
        border-bottom: 3px solid ${theme.primary};
      }
    `}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  active?: boolean;
}

const Tab: React.FC<Props> = ({ label, active, ...props }) => {
  return (
    <Container active={active} {...props}>
      {label}
    </Container>
  );
};

export default Tab;
