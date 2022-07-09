import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Base = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  cursor: pointer;

  accent-color: ${theme.primary};
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  name?: string;
}

const Checkbox: React.FC<Props> = ({ checked, name, ...props }) => {
  return <Base type="checkbox" checked={checked} name={name} {...props} />;
};

export default Checkbox;
