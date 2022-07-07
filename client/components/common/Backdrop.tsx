import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 1000;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Backdrop: React.FC<Props> = ({ children, ...props }) => {
  const onClickBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Container {...props} onClick={onClickBackdrop}>
      {children}
    </Container>
  );
};

export default Backdrop;
