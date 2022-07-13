import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";

interface Props {
  initialValue?: string;
  contents?: string;
  setContents: (data: string) => void;
}

const ToastEditor: React.FC<Props> = ({ initialValue, setContents }) => {
  const editorRef = useRef<any>(null);

  const onChangeContents = () => {
    const data = editorRef.current.getInstance().getHTML();

    setContents(data);
  };

  const onUploadImage = async (blob: Blob, callback: HookCallback) => {
    // const url = await uploadImage(blob);
    // callback(url, 'alt text');
    console.log(blob);
    return false;
  };

  return (
    <Editor
      initialValue={initialValue || "내용을 입력해주세요."}
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      height="300px"
      initialEditType="wysiwyg"
      hideModeSwitch
      language="ko-KR"
      ref={editorRef}
      onChange={onChangeContents}
      toolbarItems={[
        ["bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  );
};

export default ToastEditor;
