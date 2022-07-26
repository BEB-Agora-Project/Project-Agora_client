import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { getBoardListAPI } from "../../lib/api/board";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";

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
  const [boardList, setBoardList] = useState<GetBoardListAPIResponseType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchBoardList = async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const response = await getBoardListAPI();
      console.log("HomeBoardCard.tsx | getBoardListAPI response");
      console.log(response);
      setBoardList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("HomeBoardCard.tsx | getBoardListAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

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
        {isLoading && <LoadingSpinnerBox height="12rem" />}
        {boardList.map((board, index) => (
          <Box key={index}>
            <ListItemButton
              sx={{ height: "3.5rem" }}
              onClick={() => navigate(`/board/${board.id}`)}
            >
              {board.boardname}
            </ListItemButton>
            <Divider />
          </Box>
        ))}
      </Paper>
    </Base>
  );
};

export default HomeBoardCard;
