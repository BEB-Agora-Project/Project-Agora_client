import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { submitReplyAPI } from "../../lib/api/board";
import Button from "../common/Button";
import LoadingButton from "../common/LoadingButton";
import Textarea from "../common/Textarea";

interface Props {
  commentId: number;
  refetch: () => void;
  setReplyMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplySubmitCard: React.FC<Props> = ({
  commentId,
  refetch,
  setReplyMode,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");

  const onChangeReply = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  const onClickSubmitButton = async () => {
    setIsLoading(true);
    try {
      const body = {
        content: reply,
      };

      const response = await submitReplyAPI(commentId, body);
      console.log("ReplySubmitCard.tsx | submitReplyAPI error");
      console.log(response);
      setReplyMode(false);
      refetch();
      setIsLoading(false);
    } catch (error) {
      console.log("ReplySubmitCard.tsx | submitReplyAPI error");
      console.log(error);
    }
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
      <Textarea
        placeholder="답글을 작성해주세요."
        height="6rem"
        value={reply}
        onChange={onChangeReply}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography color={grey[500]}>(0/200자)</Typography>
        {isLoading && <LoadingButton width="4.5rem" />}
        {!isLoading && (
          <Button
            disabled={reply.length === 0}
            variant="contained"
            onClick={onClickSubmitButton}
          >
            등록
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ReplySubmitCard;
