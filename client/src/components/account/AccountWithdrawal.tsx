import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

interface Props {
  onClickWithdrawalButton: () => void;
}

const AccountWithdrawal: React.FC<Props> = ({ onClickWithdrawalButton }) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <Typography
      sx={{
        alignSelf: "flex-end",
        mt: 8,
        color: grey[300],
        textDecoration: "underline",
        cursor: "pointer",
        p: matches ? 4 : 2,
      }}
      onClick={onClickWithdrawalButton}
    >
      회원탈퇴
    </Typography>
  );
};

export default AccountWithdrawal;
