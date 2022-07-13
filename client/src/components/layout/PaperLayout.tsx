import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { theme } from "../../styles/theme";

interface BaseProps {
  width: string;
}

const Base = styled.div<BaseProps>`
  background-color: ${grey[100]};

  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
    min-height: calc(100vh - 3.5rem);
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .section {
      margin: 0 auto;
      width: ${({ width }) => width};
    }
  }
`;

interface Props {
  children: React.ReactNode;
  width: string;
}

const PaperLayout: React.FC<Props> = ({ children, width }) => {
  return (
    <Base width={width}>
      <Paper className="section" variant="outlined" square>
        {children}
      </Paper>
    </Base>
  );
};

export default PaperLayout;
