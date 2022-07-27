import React, { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "../common/Menu";
import MenuItem from "../common/MenuItem";
import { useDispatch } from "../../store";
import { modalActions } from "../../store/modalSlice";

interface Props {
  boardname: string;
  boardId: number;
}

const BoardCard: React.FC<Props> = ({ boardname, boardId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickReportButton = () => {
    dispatch(modalActions.setIsReportModalOpen(true));
  };

  return (
    <Box sx={{ display: "flex", gap: 2, p: 2 }}>
      {/* <Avatar sx={{ width: "4rem", height: "4rem", ml: matches ? 2 : 0 }} /> */}
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
          <Box sx={{ position: "relative" }}>
            <IconButton
              aria-label="board-more"
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu open={menuOpen} onClose={() => setMenuOpen(false)}>
              <MenuItem onClick={onClickReportButton}>신고하기</MenuItem>
            </Menu>
          </Box>
        </Stack>
        {/* <Typography sx={{ color: grey[500] }}>
          커뮤니티 매니저:{" "}
          <Typography component="span" sx={{ color: theme.primary }}>
            노논
          </Typography>
        </Typography> */}
      </Stack>
    </Box>
  );
};

export default BoardCard;
