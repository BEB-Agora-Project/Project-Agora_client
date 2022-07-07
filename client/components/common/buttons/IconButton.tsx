import React from "react";
import styled, { css } from "styled-components";
import palette from "../../../styles/palette";
import { theme } from "../../../styles/theme";

const getIconButtonColor = (color?: "default" | "primary") => {
  switch (color) {
    case "default":
      return css`
        color: ${palette.gray[500]};
        &:hover {
          background-color: ${palette.gray[100]};
        }
      `;
    case "primary":
      return css`
        color: ${theme.primary};
        font-weight: 500;
        &:hover {
          background-color: ${theme.primaryLight};
        }
      `;
  }
};

const getIconButtonVariant = (variant?: "contained") => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${theme.primary};
        color: white;
        &:hover {
          background-color: ${theme.primaryDimmed};
        }
      `;
  }
};

const getIconButtonDisabled = (disabled?: boolean) => {
  switch (disabled) {
    case true:
      return css`
        color: ${palette.gray[300]};
        cursor: default;
        &:hover {
          background-color: transparent;
        }
      `;
  }
};

interface ContainerProps {
  color?: "default" | "primary";
  variant?: "contained";
  disabled?: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${palette.gray[500]};
  width: 2.5rem; // 40px
  height: 2.5rem; // 40px
  border-radius: 50%;
  border: none;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[100]};
  }

  ${({ color }) => getIconButtonColor(color)};

  ${({ variant }) => getIconButtonVariant(variant)}

  ${({ disabled }) => getIconButtonDisabled(disabled)};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "default" | "primary";
  variant?: "contained";
  disabled?: boolean;
}

const IconButton: React.FC<Props> = ({
  children,
  color,
  disabled,
  variant,
  ...props
}) => {
  return (
    <Container color={color} variant={variant} disabled={disabled} {...props}>
      {children}
    </Container>
  );
};

export default IconButton;
