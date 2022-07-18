import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import Button from "../common/Button";
import Textarea from "../common/Textarea";

interface Props {
  commentId: number;
}

const ReplySubmitCard: React.FC<Props> = ({ commentId }) => {
  const [reply, setReply] = useState("");

  const onChangeReply = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  const onClickSubmitButton = () => {
    // api call
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        bgcolor: grey[100],
      }}
    >
      <Typography variant="h6" sx={{ color: grey[500] }}>
        답글 쓰기
      </Typography>
      <Textarea height="6rem" value={reply} onChange={onChangeReply} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography color={grey[500]}>(0/200자)</Typography>
        <Button variant="contained" onClick={onClickSubmitButton}>
          등록
        </Button>
      </Box>
    </Box>
  );
};

export default ReplySubmitCard;
