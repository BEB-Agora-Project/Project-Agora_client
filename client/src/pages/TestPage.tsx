import styled from "@emotion/styled";
import React from "react";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const Test: React.FC = () => {
  return <Base></Base>;
};

export default Test;
