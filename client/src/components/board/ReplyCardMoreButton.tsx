import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "../common/Menu";
import MenuItem from "../common/MenuItem";
import { useDispatch } from "../../store";
import { modalActions } from "../../store/modalSlice";

interface Props {
  ReplyId: number;
}

const ReplyCardMoreButton: React.FC<Props> = ({ ReplyId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const onClickReportButton = () => {
    dispatch(modalActions.setIsReportModalOpen(true));
  };

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          aria-label="reply-more"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)}>
          <MenuItem onClick={onClickReportButton}>신고하기</MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default ReplyCardMoreButton;
