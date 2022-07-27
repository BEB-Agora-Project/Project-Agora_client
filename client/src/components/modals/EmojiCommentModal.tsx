import {
  Avatar,
  Box,
  CircularProgress,
  Dialog,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "../../store";
import { modalActions } from "../../store/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import { submitImageCommentAPI } from "../../lib/api/board";
import { grey } from "@mui/material/colors";
import EmptyNFTNotification from "../layout/EmptyNFTNotification";

interface Props {
  postId: number;
  refetch: () => void;
}

const EmojiCommentModal: React.FC<Props> = ({ postId, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);

  const isEmojiCommentModalOpen = useSelector(
    (state) => state.modal.isEmojiCommentModalOpen
  );
  const myNFTList = useSelector((state) => state.user.nft);

  const dispatch = useDispatch();

  const onCloseEmojiCommentModal = () => {
    dispatch(modalActions.setIsEmojiCommentModalOpen(false));
  };

  const submitImageComment = async (image: string) => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const body = {
        content: null,
        image: image,
      };
      const response = await submitImageCommentAPI(postId, body);
      console.log("EmojiCommentModal.tsx | submitImageCommentAPI response");
      console.log(response);
      onCloseEmojiCommentModal();
      refetch();
    } catch (error) {
      console.log("EmojiCommentModal.tsx | submitImageCommentAPI error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickEmoji = (image: string) => {
    submitImageComment(image);
  };

  return (
    <Dialog open={isEmojiCommentModalOpen} onClose={onCloseEmojiCommentModal}>
      {isLoading && (
        <CircularProgress
          sx={{ position: "absolute", top: "45%", right: "45%" }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
          opacity: isLoading ? 0.3 : 1,
          pointerEvents: isLoading ? "none" : "all",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            이모티콘으로 댓글 달기
          </Typography>

          <IconButton
            onClick={onCloseEmojiCommentModal}
            aria-label="close-modal"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography sx={{ color: grey[500] }}>
          이모티콘을 클릭하여 해당 이모티콘으로 댓글을 등록할 수 있습니다.
        </Typography>
        <Typography variant="h6">보유중인 이모티콘</Typography>
        {myNFTList.length !== 0 && (
          <Stack direction="row" spacing={4} sx={{ overflow: "scroll", py: 4 }}>
            {myNFTList.map((nft, index) => (
              <Tooltip title={nft.name} key={index} placement="top">
                <Avatar
                  src={nft.image}
                  sx={{ width: "6rem", height: "6rem", cursor: "pointer" }}
                  onClick={() => onClickEmoji(nft.image)}
                />
              </Tooltip>
            ))}
          </Stack>
        )}
        {myNFTList.length === 0 && <EmptyNFTNotification />}
      </Box>
    </Dialog>
  );
};

export default EmojiCommentModal;
