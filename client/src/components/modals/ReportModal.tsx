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
import Button from "../common/Button";
import styled from "@emotion/styled";

const Container = styled.div`
  .button {
    height: 4rem;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;

interface Props {
  open: boolean;
  onClose: () => void;
  id?: number;
  type?: "post" | "comment";
}

const ReportModal: React.FC<Props> = ({ open, onClose, id, type }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const onClickReportButton = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullScreen={!matches}>
      <Container>
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
              {type === "post" ? "게시글 신고하기" : "댓글 신고하기"}
            </Typography>
            <IconButton onClick={onClose}>
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
            <IconButton sx={{ color: "white" }} onClick={onClose}>
              <CloseIcon />
            </IconButton>

            <Typography>
              {type === "post" ? "게시글 신고하기" : "댓글 신고하기"}
            </Typography>
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
          <Button className="button" onClick={onClickReportButton}>
            신고하기
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
};

export default ReportModal;
