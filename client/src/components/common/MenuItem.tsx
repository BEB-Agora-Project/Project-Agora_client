import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  padding: 0.5rem;
  width: 100%;

  &:hover {
    background-color: ${grey[100]};
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MenuItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Typography>{children}</Typography>
    </Container>
  );
};

export default MenuItem;
