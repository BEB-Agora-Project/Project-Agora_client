import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

interface Props {
  contents?: string;
}

const ToastViewer: React.FC<Props> = ({ contents }) => {
  return <Viewer initialValue={contents || ""} />;
};

export default ToastViewer;
