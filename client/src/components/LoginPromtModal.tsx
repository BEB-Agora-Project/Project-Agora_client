import styled from "@emotion/styled";
import { Box, Dialog } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const LoginPromtModal: React.FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const onClickPrevButton = () => {
    onClose();
  };

  const onClickLoginButton = () => {
    navigate("/login");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Base>
        로그인이 필요한 기능입니다. 로그인하시겠습니까?
        <Box sx={{ display: "flex", justifyContents: "flex-end", gap: "1rem" }}>
          <Button variant="text" onClick={onClickPrevButton}>
            돌아가기
          </Button>
          <Button onClick={onClickLoginButton}>로그인</Button>
        </Box>
      </Base>
    </Dialog>
  );
};

export default LoginPromtModal;
