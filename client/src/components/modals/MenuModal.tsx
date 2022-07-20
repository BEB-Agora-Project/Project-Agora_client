import React, { useEffect } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<Props> = ({ open, onClose }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  useEffect(() => {
    if (matches) onClose();
  }, [matches, onClose]);

  return (
    <Drawer open={open} anchor="left" onClose={onClose}>
      <Box role="presentation" sx={{ width: 250 }}>
        <List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "4rem",
              pl: "1rem",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: grey[300], cursor: "pointer" }}
            >
              AGORA
            </Typography>
          </Box>
          <Link to="/discuss">
            <ListItem disablePadding onClick={onClose}>
              <ListItemButton>
                <ListItemText>토론</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/board">
            <ListItem disablePadding onClick={onClose}>
              <ListItemButton>
                <ListItemText>커뮤니티</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/market">
            <ListItem disablePadding onClick={onClose}>
              <ListItemButton>
                <ListItemText>마켓</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <Link to="/mypage">
            <ListItem disablePadding onClick={onClose}>
              <ListItemButton>
                <ListItemText>마이페이지</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/account">
            <ListItem disablePadding onClick={onClose}>
              <ListItemButton>
                <ListItemText>개인정보 관리</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuModal;
