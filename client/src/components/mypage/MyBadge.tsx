import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useMediaQuery from "../../hooks/useMediaQuery";
import { updateCurrentBadgeAPI } from "../../lib/api/user";
import { getBadgeImageSrc, getBadgeName } from "../../lib/utils";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import EmptyBadgeNotification from "../layout/EmptyBadgeNotification";

interface Props {
  myPageInfo: GetMyPageInfoAPIResponseType | undefined;
}

const MyBadge: React.FC<Props> = ({ myPageInfo }) => {
  const [isLoading, setIsLoading] = useState(false);

  const currentBadge = useSelector((state) => state.user.currentBadge);
  const authenticate = useAuth();

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
    opacity: isLoading ? "0.4" : "1",
  };

  const onClickChangeBadgeButton = async (badgeId: number) => {
    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const body = {
        badgeId: badgeId,
      };
      console.log("MyBadge.tsx | updateCurrentBadgeAPI response");
      const response = await updateCurrentBadgeAPI(body);
      console.log(response);
      await authenticate();
      setIsLoading(false);
    } catch (error) {
      console.log("MyBadge.tsx | updateCurrentBadgeAPI error");
      console.log(error);
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {isLoading && (
        <CircularProgress
          sx={{ position: "absolute", top: "50%", right: "50%" }}
        />
      )}
      <Box sx={boxStyle}>
        <Typography variant="h5">보유중인 뱃지</Typography>
        <Stack direction="row" spacing={4}>
          {myPageInfo?.myitems.length === 0 && <EmptyBadgeNotification />}
          {myPageInfo?.myitems.map((item, index) => (
            <Stack key={index} spacing={1} sx={{ alignItems: "center" }}>
              <Avatar
                src={getBadgeImageSrc(item.Normalitem.itemname)}
                sx={{
                  width: "4rem",
                  height: "4rem",
                }}
              />
              <Typography>{getBadgeName(item.Normalitem.itemname)}</Typography>
              <Chip
                label={
                  Number(currentBadge) === item.Normalitem.id
                    ? "사용중"
                    : "사용하기"
                }
                color="primary"
                sx={{
                  color: "white",
                  opacity:
                    Number(currentBadge) === item.Normalitem.id ? "0.4" : "1",
                  cursor: "pointer",
                }}
                onClick={() => onClickChangeBadgeButton(item.Normalitem.id)}
              />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default MyBadge;
