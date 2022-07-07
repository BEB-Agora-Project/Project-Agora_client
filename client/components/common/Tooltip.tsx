import React, { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

const getTooltipPosition = (position?: "top" | "right" | "left" | "bottom") => {
  switch (position) {
    case "left":
      return css`
        right: 110%;
        top: 50%;
        transform: translateY(-50%);
      `;
    case "right":
      return css`
        left: 110%;
        top: 50%;
        transform: translateY(-50%);
      `;
    case "top":
      return css`
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
      `;
    case "bottom":
      return css`
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
      `;
  }
};

interface ContainerProps {
  showTooltip: boolean;
  position?: "top" | "right" | "left" | "bottom";
}

const Container = styled.div<ContainerProps>`
  .tooltip {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 6rem;
    background-color: ${palette.gray[600]};
    color: white;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    position: absolute;
    opacity: 0;
    animation: visible 0.2s;

    z-index: 999;

    ${({ position }) => getTooltipPosition(position)};
  }

  .target {
    position: relative;
    display: flex;
  }

  ${({ showTooltip }) =>
    showTooltip &&
    css`
      .tooltip {
        opacity: 1;
      }
    `}

  @keyframes visible {
    from {
      opacity: 0;
    }
    to {
      opcaity: 1;
    }
  }
`;

interface Props {
  children: React.ReactNode;
  text: string;
  position?: "top" | "right" | "left" | "bottom";
}

const Tooltip: React.FC<Props> = ({ children, text, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Container showTooltip={showTooltip} position={position}>
      <div
        className="target"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        {children}
        {showTooltip && <div className="tooltip">{text}</div>}
      </div>
    </Container>
  );
};

export default Tooltip;
