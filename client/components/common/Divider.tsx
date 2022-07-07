import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

interface ContainerProps {
  orientation?: "horizontal" | "vertical";
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 1px;
  background-color: ${palette.gray[200]};

  ${({ orientation }) =>
    orientation === "vertical" &&
    css`
      height: 100%;
      width: 1px;
    `}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<Props> = ({ orientation, ...props }) => {
  return <Container orientation={orientation} {...props} />;
};

export default Divider;
