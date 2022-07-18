import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import SettingsIcon from "@mui/icons-material/Settings";
import { theme } from "../../styles/theme";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onClickProfileImageEditButton: () => void;
}

const ProfileImageEditButton: React.FC<Props> = ({
  onClickProfileImageEditButton,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        bgcolor: "white",
        border: `1px solid ${grey[300]}`,
        position: "absolute",
        right: "0",
        bottom: "0",
        cursor: "pointer",
      }}
      onClick={onClickProfileImageEditButton}
    >
      <SettingsIcon sx={{ color: theme.primary }} />
    </Box>
  );
};

export default ProfileImageEditButton;
