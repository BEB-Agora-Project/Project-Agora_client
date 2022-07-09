import React from "react";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: ${grey[700]};
  background-color: #fbe201;
  width: auto;
  height: 4rem;
  padding: 0.625rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;

  transition: 0.2s ease;
  cursor: pointer;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface Props {
  width?: string;
  height?: string;
}

const KakaoLoginButton: React.FC<Props> = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <img src="/kakao-logo.png" alt="" width="24" height="24" />
      <p>카카오 계정으로 로그인</p>
    </Container>
  );
};

export default KakaoLoginButton;
