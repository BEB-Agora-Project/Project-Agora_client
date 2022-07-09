import React, { useState } from "react";
import { Box, Dialog, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  postId: number;
}

const ModalStyle = {
  display: "flex",
  width: "20rem",
  height: "20rem",
  justifyContent: "center",
  alignItems: "center",
};

const PostDetailMoreButton: React.FC<Props> = ({ postId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Dialog
        sx={{}}
        className="modal"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Box sx={ModalStyle}>신고하기</Box>
      </Dialog>

      <IconButton onClick={() => setModalOpen(true)}>
        <MoreVertIcon />
      </IconButton>
    </>
  );
};

export default PostDetailMoreButton;
