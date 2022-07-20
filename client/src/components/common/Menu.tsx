import styled from "@emotion/styled";
import { ClickAwayListener } from "@mui/material";
import React from "react";
import { theme } from "../../styles/theme";

interface ContainerProps {
  width?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(0 - 50%);
  right: 0;

  width: 6rem;

  box-shadow: ${theme.elevation2};
  cursor: pointer;

  width: ${({ width }) => width};

  z-index: 999;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  width?: string;
}

const Menu: React.FC<Props> = ({
  children,
  open,
  onClose,
  width,
  ...props
}) => {
  return (
    <>
      {open && (
        <ClickAwayListener onClickAway={onClose}>
          <Container onClick={onClose} width={width} {...props}>
            {children}
          </Container>
        </ClickAwayListener>
      )}
    </>
  );
};

export default Menu;
