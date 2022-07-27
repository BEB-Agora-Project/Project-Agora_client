import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { getRecentDiscussAPI } from "../../lib/api/discuss";
import { shortenText } from "../../lib/utils";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";

const Base = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    padding-top: 2rem;
    .section {
      margin: 0 auto;
      width: ${theme.media.desktop};
    }
  }
`;

const HomeDiscussCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [discussion, setDiscussion] =
    useState<GetRecentDiscussAPIResponseType>();

  const navigate = useNavigate();

  const fetchDiscussion = async () => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const response = await getRecentDiscussAPI();
      console.log("HomeDiscussCard.tsx | getRecentDiscussAPI response");
      console.log(response);
      setDiscussion(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("HomeDiscussCard.tsx | getRecentDiscussAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiscussion();
  }, []);

  return (
    <Base>
      <Paper className="section" square variant="outlined">
        {isLoading && <LoadingSpinnerBox height="10rem" />}
        {!isLoading && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                },
                mb: 1,
              }}
              onClick={() => navigate("/discuss")}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                진행 중인 토론
              </Typography>
              <KeyboardArrowRightIcon />
            </Stack>
            <Typography variant="h6" sx={{ color: theme.primary }}>
              {discussion?.debate.title}
            </Typography>
            <Typography sx={{ pt: 1 }}>
              {shortenText(discussion?.debate.content || "", 200)}
            </Typography>
          </Box>
        )}
      </Paper>
    </Base>
  );
};

export default HomeDiscussCard;
