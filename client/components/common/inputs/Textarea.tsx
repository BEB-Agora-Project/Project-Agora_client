import React from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = styled.textarea<ContainerProps>`
  height: 2.5rem; // 40px
  border: 1px solid ${palette.gray[200]};
  outline: none;
  border-radius: 0.25rem; // 4px
  padding: 0.5rem;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
}

const Textarea: React.FC<Props> = ({ width, height, ...props }) => {
  return <Container width={width} height={height} {...props} />;
};

export default Textarea;
