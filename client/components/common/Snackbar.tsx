import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import { MdClose } from "react-icons/md";

const getSnackbarColor = (color?: "primary" | "success" | "error") => {
  switch (color) {
    case "primary":
      return css`
        background-color: ${theme.primary};
      `;
    case "success":
      return css`
        background-color: ${theme.success};
      `;
    case "error":
      return css`
        background-color: ${theme.error};
      `;
  }
};

interface ContainerProps {
  color?: "primary" | "success" | "error";
  open: boolean;
  autoHideDuration?: number;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;

  ${({ open }) =>
    open &&
    css`
      visibility: visible;
      animation: fadein 0.5s;
    `}

  .snackbar-left-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .snackbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: white;
    width: 15rem; // 240px
    height: 3rem; // 48px
    padding: 1rem;
    background-color: ${palette.gray[700]};
    border-radius: 0.25rem;

    ${({ color }) => getSnackbarColor(color)};
  }

  .snackbar-close-icon {
    cursor: pointer;
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 1rem;
      opacity: 1;
    }
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: "primary" | "success" | "error";
  autoHideDuration?: number;
  open: boolean;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const Snackbar: React.FC<Props> = ({
  children,
  color,
  autoHideDuration,
  open,
  icon,
  onClose,
  ...props
}) => {
  useEffect(() => {
    if (!(autoHideDuration && onClose)) return;
    const time = setTimeout(() => {
      onClose();
    }, autoHideDuration);

    return () => clearTimeout(time);
  }, [autoHideDuration, onClose]);

  return (
    <Container color={color} open={open} {...props}>
      <div className="snackbar">
        <div className="snackbar-left-area">
          {icon && icon}
          <p className="snackbar-text">{children}</p>
        </div>
        <MdClose
          className="snackbar-close-icon"
          color="white"
          size="1.5rem"
          onClick={onClose}
        />
      </div>
    </Container>
  );
};

export default Snackbar;
