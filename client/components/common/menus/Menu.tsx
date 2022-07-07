import React from "react";
import styled, { css } from "styled-components";
import palette from "../../../styles/palette";
import { theme } from "../../../styles/theme";

interface ContainerProps {
  width?: string;
  height?: string;
  open: boolean;
}

const Container = styled.div<ContainerProps>`
  flex-direction: column;
  background-color: white;
  border-radius: 0.25rem;
  padding: 0.5rem 0;
  box-shadow: ${theme.elevation4};
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  color: ${palette.gray[700]};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  open: boolean;
  onClose: () => void;
}

const Menu: React.FC<Props> = ({
  children,
  width,
  height,
  open,
  onClose,
  ...props
}) => {
  return (
    <Container width={width} height={height} open={open} {...props}>
      {children}
    </Container>
  );
};

export default Menu;
