type HookMap = {
  addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
};

type HookCallback = (url: string, text?: string) => void;
