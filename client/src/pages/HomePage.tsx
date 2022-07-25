import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LoginPromptHeader from "../components/home/LoginPromptHeader";
import { grey } from "@mui/material/colors";
import { theme } from "../styles/theme";
import { Box } from "@mui/material";
import HomeDiscussCard from "../components/home/HomeDiscussCard";
import HomeBoardCard from "../components/home/HomeBoardCard";
import HomePostCard from "../components/home/HomePostCard";
import FloatingActionButton from "../components/common/FloatingActionButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Base = styled.div`
  background-color: ${grey[100]};

  padding-bottom: 1rem;

  .section-wrapper {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    padding-bottom: 2rem;

    .section-wrapper {
      margin: 0 auto;
      margin-top: 2rem;
      width: ${theme.media.desktop};
      flex-direction: row;
      gap: 2rem;
    }
  }
`;

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const onClickFAB = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  return (
    <Base>
      <LoginPromptHeader />
      <HomeDiscussCard />
      <Box className="section-wrapper">
        <HomeBoardCard />
        <HomePostCard />
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          transition: "0.2s ease",
          opacity: scrollY > 600 ? 1 : 0,
          pointerEvents: scrollY > 600 ? "all" : "none",
        }}
      >
        <FloatingActionButton size="small" shape="rounded" onClick={onClickFAB}>
          <KeyboardArrowUpIcon />
        </FloatingActionButton>
      </Box>
    </Base>
  );
};

export default Home;
