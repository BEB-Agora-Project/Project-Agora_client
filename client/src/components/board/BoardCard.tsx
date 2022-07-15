import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  boardname: string;
  boardId: number;
}

const BoardCard: React.FC<Props> = ({ boardname, boardId }) => {
  const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(
    null
  );
  const open = Boolean(anchorElement);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const navigate = useNavigate();

  const onClickMoreButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const onCloseMoreMenu = () => {
    setAnchorElement(null);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, p: 2 }}>
      <Avatar sx={{ width: "4rem", height: "4rem", ml: matches ? 2 : 0 }} />
      <Stack sx={{ flex: 1 }}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            onClick={() => navigate(`/board/${boardId}`)}
            sx={{
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            {boardname}
          </Typography>
          <IconButton onClick={onClickMoreButton}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="more-menu"
            anchorEl={anchorElement}
            open={open}
            onClose={onCloseMoreMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={onCloseMoreMenu}>신고하기</MenuItem>
          </Menu>
        </Stack>
        <Typography sx={{ color: theme.primary }}>1,000개의 글</Typography>
      </Stack>
    </Box>
  );
};

export default BoardCard;
