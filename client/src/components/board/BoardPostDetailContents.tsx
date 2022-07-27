import { Box } from "@mui/material";
import React from "react";
import ToastViewer from "../toast-editor/ToastViewer";

interface Props {
  postDetail?: PostDetailType;
}

const BoardPostDetailContents: React.FC<Props> = ({ postDetail }) => {
  return (
    <Box sx={{ padding: "1rem" }}>
      {postDetail?.content && <ToastViewer contents={postDetail?.content} />}
    </Box>
  );
};

export default BoardPostDetailContents;
