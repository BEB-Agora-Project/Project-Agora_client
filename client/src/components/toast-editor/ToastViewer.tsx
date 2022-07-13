import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import styled from "@emotion/styled";

const Base = styled.div`
  .toastui-editor-contents p {
    font-size: 1rem;
  }
`;

interface Props {
  contents?: string;
}

const ToastViewer: React.FC<Props> = ({ contents }) => {
  return (
    <Base>
      <Viewer initialValue={contents || ""} />
    </Base>
  );
};

export default ToastViewer;
