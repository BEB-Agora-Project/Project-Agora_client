import styled from "@emotion/styled";
import { Drawer } from "@mui/material";
import React from "react";

const Base = styled.div``;

interface Props {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Base>
      <Drawer open={open} anchor="left" onClose={onClose}>
        12123123123
      </Drawer>
    </Base>
  );
};

export default MenuDrawer;
