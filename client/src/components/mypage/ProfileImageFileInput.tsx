import React from "react";
import { Box } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { grey } from "@mui/material/colors";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ProfileImageFileInput: React.FC<Props> = ({ ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",
        border: `1px solid ${grey[300]}`,
        height: "6rem",
        cursor: "pointer",
        ":hover": {
          bgcolor: grey[100],
        },
      }}
      {...props}
    >
      <FileUploadIcon sx={{ color: grey[700] }} />
    </Box>
  );
};

export default ProfileImageFileInput;
