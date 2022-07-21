import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

interface Props {
  onClickWithdrawalButton: () => void;
}

const AccountWithdrawal: React.FC<Props> = ({ onClickWithdrawalButton }) => {
  return (
    <Typography
      sx={{
        alignSelf: "flex-end",
        mt: 8,
        color: grey[300],
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={onClickWithdrawalButton}
    >
      회원탈퇴
    </Typography>
  );
};

export default AccountWithdrawal;
