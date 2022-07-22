import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";
import { uploadImageAPI } from "../../lib/api/board";

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
    console.log("ToastEditor.tsx | editorRef.current.getInstance().getHTML()");
    console.log(data);
  };

  const onUploadImage = async (blob: Blob, callback: HookCallback) => {
    const formData = new FormData();
    formData.append("image", blob);

    const body = formData;

    try {
      const response = await uploadImageAPI(body);
      console.log("ToastEditor.tsx | uploadImageAPI response");
      console.log(response);

      const imageUrl = response.data.imageUrl;

      callback(imageUrl, "image");
    } catch (error) {
      console.log("ToastEditor.tsx | uploadImageAPI error ");
      console.log(error);
    }
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
