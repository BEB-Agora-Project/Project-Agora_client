import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";

const getIconButtonColor = (color?: "default" | "primary") => {
  switch (color) {
    case "default":
      return css`
        color: ${grey[500]};

        &:hover {
          background-color: ${grey[100]};
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

const getIconButtonDisabled = (disabled?: boolean) => {
  switch (disabled) {
    case true:
      return css`
        color: ${grey[300]};
        cursor: default;

        &:hover {
          background-color: transparent;
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

interface BaseProps {
  color?: "default" | "primary";
  disabled?: boolean;
  variant?: "contained";
}

const Base = styled.button<BaseProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${grey[500]};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${grey[100]};
  }

  ${({ color }) => getIconButtonColor(color)};

  ${({ disabled }) => getIconButtonDisabled(disabled)};

  ${({ variant }) => getIconButtonVariant(variant)};
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
    <Base color={color} disabled={disabled} variant={variant} {...props}>
      {children}
    </Base>
  );
};

export default IconButton;
