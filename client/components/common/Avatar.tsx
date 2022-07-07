import React from "react";
import styled, { css } from "styled-components";

const getAvatarSize = (size?: "small" | "medium" | "large" | "extra-large") => {
  switch (size) {
    case "small":
      return css`
        width: 1rem;
        height: 1rem;
      `;
    case "medium":
      return css`
        width: 1.5rem;
        height: 1.5rem;
      `;
    case "large":
      return css`
        width: 2rem;
        height: 2rem;
      `;
    case "extra-large":
      return css`
        width: 5rem;
        height: 5rem;
      `;
  }
};

interface ContainerProps {
  size?: "small" | "medium" | "large" | "extra-large";
}

const Container = styled.img<ContainerProps>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;

  ${({ size }) => getAvatarSize(size)};
`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large" | "extra-large";
}

const Avatar: React.FC<Props> = ({ size, src, alt, ...props }) => {
  return <Container src={src} alt={alt} size={size} {...props} />;
};

export default Avatar;
