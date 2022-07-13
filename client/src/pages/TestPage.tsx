import styled from "@emotion/styled";
import React from "react";
import Button from "../components/common/Button";
import Checkbox from "../components/common/Checkbox";
import FloatingActionButton from "../components/common/FloatingActionButton";
import CreateIcon from "@mui/icons-material/Create";
import Textarea from "../components/common/Textarea";
import IconButton from "../components/common/IconButton";
import LoadingButton from "../components/common/LoadingButton";
import { grey } from "@mui/material/colors";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  .row {
    display: flex;
    gap: 2rem;
  }

  .div {
    color: ${grey[400]};
  }
`;

const Test: React.FC = () => {
  return (
    <Base>
      <div className="row">
        <Button variant="contained">버튼</Button>
        <Button variant="outlined">버튼</Button>
        <Button variant="text">버튼</Button>
        <Checkbox />
        <FloatingActionButton>
          <CreateIcon />
        </FloatingActionButton>
        <FloatingActionButton variant="extended">
          <CreateIcon />
          확장된 FAB
        </FloatingActionButton>
        <FloatingActionButton shape="rounded">
          <CreateIcon />
        </FloatingActionButton>
        <Textarea width="20rem" height="10rem" />
        <IconButton>
          <CreateIcon />
        </IconButton>
        <LoadingButton />
        <div className="div">나나나</div>
      </div>
    </Base>
  );
};

export default Test;
