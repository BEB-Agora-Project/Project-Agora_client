import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";

const getCTAButtonDisabled = (disabled?: boolean) => {
  switch (disabled) {
    case true:
      return css`
        opacity: 0.38;
        pointer-events: none;
      `;
  }
};

const getCTAButtonIsLoading = (isLoading?: boolean) => {
  switch (isLoading) {
    case true:
      return css`
        background-color: ${grey[300]};
        pointer-events: none;
      `;
  }
};

const getCTAButtonResponsive = (responsive?: boolean) => {
  switch (responsive) {
    case true:
      return css`
        @media screen and (min-width: ${theme.media.desktop}) {
          font-size: 1rem;
          height: auto;
          align-self: flex-end;

          .lds-dual-ring:after {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
      `;
  }
};

interface ContainerProps {
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
  responsive?: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin-top: 1rem;
  color: white;
  background-color: ${theme.primary};
  width: auto;
  height: 4rem;
  padding: 0.625rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${theme.primaryVariant};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    min-width: 6rem;
    width: ${({ width }) => width};
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 2rem;
    height: 2rem;
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

  ${({ disabled }) => getCTAButtonDisabled(disabled)};

  ${({ isLoading }) => getCTAButtonIsLoading(isLoading)};

  ${({ responsive }) => getCTAButtonResponsive(responsive)};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  disabled?: boolean;
  isLoading?: boolean;
  responsive?: boolean;
  children: React.ReactNode;
}

const CTAButton: React.FC<Props> = ({
  children,
  disabled,
  width,
  isLoading,
  responsive,
  ...props
}) => {
  return (
    <Container
      disabled={disabled}
      width={width}
      isLoading={isLoading}
      responsive={responsive}
      {...props}
    >
      {isLoading ? <div className="lds-dual-ring" /> : children}
    </Container>
  );
};

export default CTAButton;
