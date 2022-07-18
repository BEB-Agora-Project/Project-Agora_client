import React from "react";
import styled from "@emotion/styled";
import LoginPromptHeader from "../components/home/LoginPromptHeader";
import { grey } from "@mui/material/colors";
import { theme } from "../styles/theme";
import { Box } from "@mui/material";

import HomeDiscussCard from "../components/home/HomeDiscussCard";
import HomeBoardCard from "../components/home/HomeBoardCard";
import HomePostCard from "../components/home/HomePostCard";

const Base = styled.div`
  background-color: ${grey[100]};

  padding-bottom: 1rem;

  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    padding-bottom: 2rem;

    .section {
      margin: 0 auto;
      width: ${theme.media.desktop};
    }

    .aside {
      width: 18rem;
    }

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
  return (
    <Base>
      <LoginPromptHeader />
      <HomeDiscussCard />
      <Box className="section-wrapper">
        <HomeBoardCard />
        <HomePostCard />
      </Box>
    </Base>
  );
};

export default Home;
