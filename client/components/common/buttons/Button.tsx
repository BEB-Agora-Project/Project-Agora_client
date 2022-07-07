import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

const getButtonVariant = (variant?: "text" | "contained" | "outlined") => {
  switch (variant) {
    case "text":
      return css`
        background: none;
        color: ${theme.primary};

        &:hover {
          background-color: ${theme.primaryVariant};
        }
      `;
    case "contained":
      return css`
        background-color: ${theme.primary};
        color: white;

        &:hover {
          background-color: ${theme.primaryVariant};
        }
      `;
    case "outlined":
      return css`
        background-color: white;
        border: 1px solid ${theme.primary};
        color: ${theme.primary};

        &:hover {
          background-color: ${theme.primaryVariant};
        }
      `;
  }
};

const getButtonDisabled = (disabled?: boolean) => {
  switch (disabled) {
    case true:
      return css`
        opacity: 0.38;
        pointer-events: none;
      `;
  }
};

const getButtonSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return css`
        height: 2rem; // 36px
        padding: 0.5rem 1.2rem; // 8px 19.2px
        font-size: 0.75rem; // 12px
      `;
    case "medium":
      return css`
        height: 2.5rem; // 40px
        padding: 0.625rem 1.5rem; // 10px 24px
        font-size: 0.875rem; // 14px
      `;
    case "large":
      return css`
        height: 3rem; // 48px
        padding: 0.75rem 1.8rem; // 12px 28.8px
        font-size: 1rem; // 16px
      `;
  }
};

interface ContainerProps {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  width?: string;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; // 8px

  color: white;
  background-color: ${theme.primary};
  width: auto;
  height: 2.5rem; // 40px
  padding: 0.625rem 1.5rem; // 10px 24px
  font-size: 0.875rem; // 14px
  font-weight: 500;
  border-radius: 2rem;
  border: none;

  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${theme.primaryVariant};
  }

  width: ${({ width }) => width};

  ${({ startIcon }) =>
    startIcon &&
    css`
      padding-left: 1rem;
    `};

  ${({ endIcon }) =>
    endIcon &&
    css`
      padding-right: 1rem;
    `};

  ${({ variant }) => getButtonVariant(variant)};

  ${({ disabled }) => getButtonDisabled(disabled)};

  ${({ size }) => getButtonSize(size)};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  width?: string;
  disabled?: boolean;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  variant,
  disabled,
  size,
  startIcon,
  endIcon,
  width,
  ...props
}) => {
  return (
    <Container
      variant={variant}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      width={width}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Container>
  );
};

export default Button;
