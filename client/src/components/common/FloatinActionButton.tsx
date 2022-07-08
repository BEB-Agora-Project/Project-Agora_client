import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme";

const getFloatingActionButtonColor = (
  color?: "primary" | "secondary" | "success" | "error"
) => {
  switch (color) {
    case "primary":
      return css`
        background-color: ${theme.primary};
        &:hover {
          background-color: ${theme.primaryVariant};
        }
      `;
    case "secondary":
      return css`
        background-color: ${theme.secondary};
        &:hover {
          background-color: ${theme.secondaryVariant};
        }
      `;
    case "success":
      return css`
        background-color: ${theme.success};
        &:hover {
          background-color: ${theme.successVariant};
        }
      `;
    case "error":
      return css`
        background-color: ${theme.error};
        &:hover {
          background-color: ${theme.errorVariant};
        }
      `;
  }
};

const getFloatingActionButtonSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return css`
        width: 2.5rem;
        height: 2.5rem;
      `;
    case "medium":
      return css`
        width: 3rem;
        height: 3rem;
      `;
    case "large":
      return css`
        width: 3.5rem;
        height: 3.5rem;
      `;
  }
};

const getFloatingActionButtonVariant = (variant?: "extended") => {
  switch (variant) {
    case "extended":
      return css`
        padding: 1rem;
        padding-right: 1.5rem;
        line-height: 100px;
        border-radius: 2rem;
        width: auto;
      `;
  }
};

const getFloatingActionButtonShape = (shape?: "rounded" | "boxier") => {
  switch (shape) {
    case "rounded":
      return css`
        border-radius: 50%;
      `;
    case "boxier":
      return css`
        border-radius: 1rem;
      `;
  }
};

interface ContainerProps {
  color?: "primary" | "secondary" | "success" | "error";
  size?: "small" | "medium" | "large";
  variant?: "extended";
  shape?: "rounded" | "boxier";
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 3.5rem; // 56px
  height: 3.5rem; // 56px
  background-color: ${theme.primary};
  box-shadow: ${theme.elevation8};
  border-radius: 1rem;
  border: none;
  color: white;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${theme.primaryVariant};
  }

  ${({ color }) => getFloatingActionButtonColor(color)};

  ${({ size }) => getFloatingActionButtonSize(size)};

  ${({ variant }) => getFloatingActionButtonVariant(variant)};

  ${({ shape }) => getFloatingActionButtonShape(shape)};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "error";
  size?: "small" | "medium" | "large";
  variant?: "extended";
  shape?: "rounded" | "boxier";
  text?: string;
}

const FloatingActionButton: React.FC<Props> = ({
  children,
  color,
  size,
  variant,
  shape,
  text,
  ...props
}) => {
  return (
    <Container
      color={color}
      size={size}
      variant={variant}
      shape={shape}
      {...props}
    >
      {children}
      {variant === "extended" && text}
    </Container>
  );
};

export default FloatingActionButton;
