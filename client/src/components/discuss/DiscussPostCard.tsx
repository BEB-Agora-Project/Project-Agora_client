import React from "react";
import styled from "@emotion/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { theme } from "../../styles/theme";
import { grey } from "@mui/material/colors";

const Base = styled.div``;

const DiscussPostCard: React.FC = () => {
  return (
    <Base>
      <Box
        sx={{
          border: `1px solid ${grey[500]}`,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography variant="h6">닉네임</Typography>
            <Typography variant="body1" sx={{ color: grey[500] }}>
              1시간 전
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", mr: 1 }}
          >
            <IconButton>
              <KeyboardArrowUpIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: theme.primary }}>
              7
            </Typography>
          </Stack>
        </Stack>
        <Typography>
          의견 내용 의견 내용 의견 내용 의견 내용 의견 내용 의견 내용 의견 내용
        </Typography>
      </Box>
    </Base>
  );
};

export default DiscussPostCard;
