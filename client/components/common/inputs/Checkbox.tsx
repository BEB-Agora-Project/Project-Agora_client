import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem; // 20px
  height: 1.25rem; // 20px
  border-radius: 50%;
  cursor: pointer;

  accent-color: ${theme.primary};
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  name?: string;
}

const Checkbox: React.FC<Props> = ({ checked, name, ...props }) => {
  return <Container type="checkbox" checked={checked} name={name} {...props} />;
};

export default Checkbox;
