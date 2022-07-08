import styled from "@emotion/styled";
import { Backdrop } from "@mui/material";
import React from "react";

const Base = styled.div`
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    width: 80%;

    background-color: white;
  }
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<Props> = ({ open, onClose }) => {
  const onClickBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    onClose();
    event.stopPropagation();
  };

  return (
    <Backdrop open={open} onClick={onClickBackdrop}>
      <Base>
        <div className="modal"></div>
      </Base>
    </Backdrop>
  );
};

export default MenuModal;
