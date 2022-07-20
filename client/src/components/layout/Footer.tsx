import React from "react";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

const Base = styled.footer`
  display: flex;
  justify-content: center;

  background-color: ${grey[300]};

  padding: 0 1rem;
`;

const Footer: React.FC = () => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const contributorStyle = {
    ":hover": {
      textDecoration: "underline",
    },
    cursor: "pointer",
  };

  return (
    <Base>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: matches ? theme.media.desktop : "100%",
          margin: matches ? "0 auto" : 0,
          py: 4,
          gap: 1,
          color: grey[700],
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: grey[400] }}>
          AGORA
        </Typography>
        <Typography>
          Contributors:{" "}
          <Typography component="span" sx={contributorStyle}>
            유승준
          </Typography>{" "}
          |{" "}
          <Typography component="span" sx={contributorStyle}>
            송승기
          </Typography>{" "}
          |{" "}
          <Typography component="span" sx={contributorStyle}>
            신동욱
          </Typography>{" "}
          |{" "}
          <Typography component="span" sx={contributorStyle}>
            신상호
          </Typography>
        </Typography>
      </Box>
    </Base>
  );
};

export default Footer;
