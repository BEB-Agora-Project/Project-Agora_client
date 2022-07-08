import styled from "@emotion/styled";
import React from "react";
import palette from "../styles/palette";

const Base = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;
  background-color: ${palette.gray[200]};
`;

const Footer: React.FC = () => {
  return <Base>Footer</Base>;
};

export default Footer;
