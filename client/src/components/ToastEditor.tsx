import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

interface Props {
  initialValue?: string;
}

const ToastEditor: React.FC<Props> = ({ initialValue }) => {
  return (
    <Editor
      initialValue={initialValue || "내용을 입력해주세요."}
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      height="300px"
      initialEditType="wysiwyg"
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
    />
  );
};

export default ToastEditor;
