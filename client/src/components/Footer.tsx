import React from "react";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

const Base = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;
  background-color: ${grey[200]};
`;

const Footer: React.FC = () => {
  return <Base>Footer</Base>;
};

export default Footer;
