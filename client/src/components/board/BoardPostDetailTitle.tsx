import { Typography } from "@mui/material";
import React from "react";
import { theme } from "../../styles/theme";

interface Props {
  onClickBoardname: () => void;
  postDetail?: PostDetailType;
}

const BoardPostDetailTitle: React.FC<Props> = ({
  postDetail,
  onClickBoardname,
}) => {
  return (
    <>
      <Typography
        variant="body1"
        color={theme.primaryDimmed}
        sx={{ px: 2, mt: 4, cursor: "pointer" }}
        onClick={onClickBoardname}
      >
        # {postDetail?.Board?.boardname}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, px: 2 }}>
        {postDetail?.title}
      </Typography>
    </>
  );
};

export default BoardPostDetailTitle;
