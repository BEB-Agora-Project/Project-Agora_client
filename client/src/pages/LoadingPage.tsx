import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { scrollToTop } from "../lib/utils";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 3.5rem);
`;

const LoadingPage: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Base>
      <CircularProgress />
    </Base>
  );
};

export default LoadingPage;
