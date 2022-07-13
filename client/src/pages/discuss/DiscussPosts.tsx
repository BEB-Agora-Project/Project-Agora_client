import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useSearchParams } from "react-router-dom";
import DiscussPostCard from "../../components/discuss/DiscussPostCard";
import DiscussPostSubmit from "../../components/discuss/DiscussPostSubmit";
import PaperLayout from "../../components/layout/PaperLayout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";

const Base = styled.div``;
const DiscussPosts: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [searchParams] = useSearchParams();
  const position = searchParams.get("position");

  const getTitle = () => {
    if (position === "positive") return "찬성";
    if (position === "neutral") return "중립";
    if (position === "negative") return "반대";
  };

  return (
    <Base>
      <PaperLayout width="48rem">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: matches ? 4 : 2,
          }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h5">{getTitle()} 의견</Typography>
            <Typography variant="body1" sx={{ color: grey[500] }}>
              최신순
            </Typography>
          </Stack>
          {FAKE_ARRAY.map((_, index) => (
            <DiscussPostCard key={index} />
          ))}
          <DiscussPostSubmit
            onClickSubmitButton={() => {}}
            isLoggedIn={isLoggedIn}
          />
        </Box>
      </PaperLayout>
    </Base>
  );
};

export default DiscussPosts;
