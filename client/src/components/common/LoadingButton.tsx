import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

const getLoadingButtonVariant = (variant?: "contained" | "outlined") => {
  switch (variant) {
    case "contained":
      return css`
        color: ${grey[400]};
        background-color: ${grey[300]};
      `;
    case "outlined":
      return css`
        color: ${grey[400]};
        background: none;
        border: 1px solid ${grey[300]};
      `;
  }
};

const getLoadingButtonRingSize = (ringSize?: "large") => {
  switch (ringSize) {
    case "large":
      return css`
        .lds-dual-ring:after {
          width: 2rem;
          height: 2rem;
        }
      `;
  }
};

interface ContainerProps {
  variant?: "contained" | "outlined";
  width?: string;
  ringSize?: "large";
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${grey[400]};
  background-color: ${grey[300]};
  height: 2.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  transition: 0.2s ease;
  min-width: 4rem;

  width: ${({ width }) => width};

  ${({ variant }) => getLoadingButtonVariant(variant)};

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid ${grey[400]};
    border-color: ${grey[400]} ${grey[400]} transparent;
    animation: lds-dual-ring 1s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ ringSize }) => getLoadingButtonRingSize(ringSize)};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  width?: string;
  ringSize?: "large";
}

const LoadingButton: React.FC<Props> = ({
  variant,
  width,
  ringSize,
  ...props
}) => {
  return (
    <Container variant={variant} width={width} ringSize={ringSize} {...props}>
      <div className="lds-dual-ring" />
    </Container>
  );
};

export default LoadingButton;
