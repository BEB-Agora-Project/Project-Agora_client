import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Base = styled.div``;

interface Props {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Base>
      <Drawer open={open} anchor="left" onClose={onClose}>
        <Box role="presentation" sx={{ width: 250 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>토론</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>커뮤니티</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>마켓</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>마이페이지</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>개인정보 관리</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Base>
  );
};

export default MenuDrawer;
