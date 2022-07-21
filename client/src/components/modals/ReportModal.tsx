import {
  Box,
  Checkbox,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import Textarea from "../common/Textarea";
import { useDispatch, useSelector } from "../../store";
import CTAButton from "../common/CTAButton";
import { modalActions } from "../../store/modalSlice";

const ReportModal: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);
  const dispatch = useDispatch();

  const onCloseReportModal = () => {
    dispatch(modalActions.setIsReportModalOpen(false));
  };

  const isReportModalOpen = useSelector(
    (state) => state.modal.isReportModalOpen
  );

  const onClickReportButton = () => {
    onCloseReportModal();
  };

  return (
    <Dialog
      open={isReportModalOpen}
      fullScreen={!matches}
      onClose={onCloseReportModal}
    >
      {matches && (
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            pb: 0,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            신고하기
          </Typography>
          <IconButton onClick={onCloseReportModal} aria-label="close-modal">
            <CloseIcon />
          </IconButton>
        </Stack>
      )}
      {!matches && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "3.5rem",
            bgcolor: theme.primary,
            p: 2,
            gap: 2,
            color: "white",
          }}
        >
          <IconButton sx={{ color: "white" }} onClick={onCloseReportModal}>
            <CloseIcon />
          </IconButton>
          <Typography>신고하기</Typography>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
        <Typography sx={{ fontWeight: 600, color: theme.primary }}>
          신고 사유가 무엇인가요?
        </Typography>
        <Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography>욕설, 음란물 등 불건전한 내용</Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography>
              영리목적의 상업성 광고, 저작권을 침해할 수 있는 내용
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography>유사내용을 반복하여 게재하는 도배성 글</Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography>
              특정인을 비방하거나 명예훼손의 우려가 있는 경우
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography>기타</Typography>
          </Stack>
        </Stack>
        <Typography sx={{ fontWeight: 600 }}>상세 내용</Typography>
        <Textarea height="6rem" placeholder="상세 내용을 입력해주세요." />
        <CTAButton onClick={onClickReportButton}>신고하기</CTAButton>
      </Box>
    </Dialog>
  );
};

export default ReportModal;
