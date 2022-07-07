import React from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
import { theme } from "../../../styles/theme";
import { MdArrowDropDown } from "react-icons/md";

interface ContainerProps {
  width?: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;

  .select {
    height: 2.5rem; // 40px
    padding: 0.5rem; // 8px
    padding-right: 2rem;
    outline: none;
    appearance: none;
    border-radius: 0.25rem; // 4px
    cursor: pointer;

    width: ${({ width }) => width};

    border: 1px solid ${palette.gray[200]};

    &:hover {
      border: 1px solid ${theme.primary};
      transition: 0.2s ease;
    }
  }

  .arrow-icon-container {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    pointer-events: none;
  }
`;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  width?: string;
}

const Select: React.FC<Props> = ({ children, width, ...props }) => {
  return (
    <Container width={width}>
      <select className="select" {...props}>
        {children}
      </select>
      <div className="arrow-icon-container">
        <MdArrowDropDown color="white" size="1.5rem" />
      </div>
    </Container>
  );
};

export default Select;
