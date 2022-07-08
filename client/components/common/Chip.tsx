import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const getChipSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return css`
        font-size: 0.75rem; // 12px
        // width: 3.75rem; // 60px
        height: 1.5rem; // 24px
      `;
    case "medium":
      return css`
        font-size: 0.875rem; // 14px
        // width: 5rem; // 80px
        height: 2rem; // 32px
      `;
    case "large":
      return css`
        font-size: 1rem; // 16px
        // width: 6.25rem; // 100px
        height: 2.5rem; // 40px
      `;
  }
};

const getChipVariant = (variant?: "contained" | "outlined") => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${theme.primary};
        color: white;
      `;
    case "outlined":
      return css`
        background-color: white;
        color: black;
        border: 1px solid black;
      `;
  }
};

interface ContainerProps {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem; // 14px
  font-weight: 500;
  width: auto;
  height: 2rem;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  background-color: ${theme.primary};
  color: white;
  transition: 0.2s ease;
  cursor: default;

  ${({ size }) => getChipSize(size)};

  ${({ variant }) => getChipVariant(variant)};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
}

const Chip: React.FC<Props> = ({ children, size, ...props }) => {
  return (
    <Container size={size} {...props}>
      {children}
    </Container>
  );
};

export default Chip;
