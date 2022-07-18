import React from "react";
import { Divider, MenuItem, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Base = styled.div`
  .aside {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .aside {
      position: sticky;
      top: 2rem;
      width: 18rem;
    }
  }
`;

const HomeBoardCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Base>
      <Paper className="aside" square variant="outlined">
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            cursor: "pointer",
            ":hover": {
              textDecoration: "underline",
            },
            p: 2,
          }}
          onClick={() => navigate("/board")}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            커뮤니티 목록
          </Typography>

          <KeyboardArrowRightIcon />
        </Stack>
        <Divider />
        <MenuItem sx={{ height: "3.5rem" }} divider>
          아고라
        </MenuItem>
        <MenuItem sx={{ height: "3.5rem" }} divider>
          블록체인
        </MenuItem>
        <MenuItem sx={{ height: "3.5rem" }} divider>
          코드스테이츠
        </MenuItem>
        <MenuItem sx={{ height: "3.5rem" }} divider>
          리그 오브 레전드
        </MenuItem>
        <MenuItem sx={{ height: "3.5rem" }} divider>
          유머
        </MenuItem>
      </Paper>
    </Base>
  );
};

export default HomeBoardCard;
