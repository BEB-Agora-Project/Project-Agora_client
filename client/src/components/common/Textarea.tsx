import React from "react";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

interface BaseProps {
  width?: string;
  height?: string;
}

const Base = styled.textarea<BaseProps>`
  height: 2.5rem;
  border: 1px solid ${grey[200]};
  outline: none;
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 1rem;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ::placeholder {
    color: ${grey[300]};
  }
`;

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
}

const Textarea: React.FC<Props> = ({ width, height, ...props }) => {
  return <Base width={width} height={height} {...props} />;
};

export default Textarea;
