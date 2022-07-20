import {
  Avatar,
  Box,
  Dialog,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { useDispatch, useSelector } from "../../store";
import { modalActions } from "../../store/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import { submitImageCommentAPI } from "../../lib/api/board";
import { grey } from "@mui/material/colors";

interface Props {
  postId: number;
  refetch: () => void;
}

const EmojiCommentModal: React.FC<Props> = ({ postId, refetch }) => {
  const isEmojiCommentModalOpen = useSelector(
    (state) => state.modal.isEmojiCommentModalOpen
  );
  const myNFTList = useSelector((state) => state.user.nft);

  const dispatch = useDispatch();

  const onCloseEmojiCommentModal = () => {
    dispatch(modalActions.setIsEmojiCommentModalOpen(false));
  };

  const submitImageComment = async (image: string) => {
    /*********************** API call **************************/
    try {
      const body = {
        content: null,
        image: image,
      };
      const response = await submitImageCommentAPI(postId, body);
      console.log(response);
      onCloseEmojiCommentModal();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickEmoji = (image: string) => {
    submitImageComment(image);
  };

  return (
    <Dialog open={isEmojiCommentModalOpen} onClose={onCloseEmojiCommentModal}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            이모티콘으로 댓글 달기
          </Typography>

          <IconButton onClick={onCloseEmojiCommentModal}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography sx={{ color: grey[500] }}>
          이모티콘을 클릭하여 해당 이모티콘으로 댓글을 등록할 수 있습니다.
        </Typography>
        <Typography variant="h6">보유중인 이모티콘</Typography>
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
          {FAKE_ARRAY.map((_, index) => (
            <Avatar key={index} sx={{ width: "6rem", height: "6rem" }} />
          ))}
        </Stack>
        {myNFTList.length === 0 && (
          <Typography>보유중인 이모티콘이 없습니다.</Typography>
        )}
      </Box>
    </Dialog>
  );
};

export default EmojiCommentModal;
