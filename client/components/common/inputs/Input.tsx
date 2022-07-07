import React from "react";
import styled, { css } from "styled-components";
import palette from "../../../styles/palette";
import { theme } from "../../../styles/theme";

const getinputShape = (shape?: "rounded" | "boxier") => {
  switch (shape) {
    case "rounded":
      return css`
        border-radius: 50%;
      `;
    case "boxier":
      return css`
        border-radius: 0.5rem;
      `;
  }
};

interface ContainerProps {
  validated?: boolean;
  width?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  shape?: "rounded" | "boxier";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  height: 2.5rem;
  color: ${palette.gray[500]};

  .text-field {
    border: 1px solid ${palette.gray[200]};
    outline: none;
    padding: 1rem;
    border-radius: 0.5rem;
    color: ${palette.gray[500]};

    ${({ validated }) =>
      !validated &&
      css`
        border: 1px solid ${theme.error};
      `}

    width: ${({ width }) => width};

    ${({ startIcon }) =>
      startIcon &&
      css`
        padding-left: 3rem;
      `}

    ${({ endIcon }) =>
      endIcon &&
      css`
        padding-right: 3rem;
      `}

    ${({ shape }) => getinputShape(shape)};
  }

  .start-icon-container {
    position: absolute;
    top: 0.5rem;
    left: 0.875rem;
  }

  .end-icon-container {
    position: absolute;
    top: 0.5rem;
    right: 0.875rem;
    cursor: pointer;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  validated?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  shape?: "rounded" | "boxier";
}

const Input: React.FC<Props> = ({
  validated = true,
  width,
  startIcon,
  endIcon,
  shape,
  ...props
}) => {
  return (
    <Container
      validated={validated}
      width={width}
      startIcon={startIcon}
      endIcon={endIcon}
      shape={shape}
    >
      <input className="text-field" {...props} />
      {startIcon && <div className="start-icon-container">{startIcon}</div>}
      {endIcon && <div className="end-icon-container">{endIcon}</div>}
    </Container>
  );
};

export default Input;
