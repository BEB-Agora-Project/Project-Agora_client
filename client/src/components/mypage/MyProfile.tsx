import {
  Avatar,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { updateUsernameAPI } from "../../lib/api/user";
import { useSelector } from "../../store";
import { theme } from "../../styles/theme";
import ProfileImageEditButton from "./ProfileImageEditButton";
import CreateIcon from "@mui/icons-material/Create";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

interface Props {
  refetch: () => void;
}

const MyProfile: React.FC<Props> = ({ refetch }) => {
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);

  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const updateUsername = async () => {
    /*********************** API call **************************/
    try {
      const body = {
        username: newUsername,
      };

      const response = await updateUsernameAPI(body);
      console.log("MyProfile.tsx | updateUsernameAPI response");
      console.log(response);
      refetch();
    } catch (error) {
      console.log("MyProfile.tsx | updateUsernameAPI error");
      console.log(error);
    }
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode(true);
  };

  const onClickCancelButton = () => {
    setEditMode(false);
  };

  const onClickSubmitButton = () => {
    updateUsername();
    alert("변경되었습니다.");
    setEditMode(false);
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: matches ? 4 : 2,
  };

  return (
    <Box sx={boxStyle}>
      <Stack sx={{ alignItems: "center", mt: 4 }}>
        <Box sx={{ position: "relative" }}>
          <Avatar sx={{ width: "8rem", height: "8rem" }} />
          <ProfileImageEditButton />
        </Box>
        {!editMode && (
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              mt: 2,
              gap: 1,
              position: "relative",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {username}
            </Typography>
            <IconButton
              sx={{ position: "absolute", right: -45 }}
              onClick={onClickEditButton}
            >
              <CreateIcon />
            </IconButton>
          </Stack>
        )}
        {editMode && (
          <Stack direction="row" sx={{ alignItems: "center", mt: 2, gap: 1 }}>
            <TextField
              variant="standard"
              autoFocus
              value={newUsername}
              onChange={onChangeUsername}
            />
            <IconButton
              sx={{ color: theme.primary }}
              onClick={onClickSubmitButton}
            >
              <CheckCircleIcon />
            </IconButton>
            <IconButton onClick={onClickCancelButton}>
              <CloseIcon />
            </IconButton>
          </Stack>
        )}
        <Typography sx={{ color: grey[500] }}>{email}</Typography>
        <Typography sx={{ color: theme.primary }}>
          보유중인 토큰: {token}개
        </Typography>
      </Stack>
    </Box>
  );
};

export default MyProfile;
