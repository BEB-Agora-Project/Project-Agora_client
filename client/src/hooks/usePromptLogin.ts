import { useDispatch } from "../store";
import { modalActions } from "../store/modalSlice";

const usePromptLogin = () => {
  const dispatch = useDispatch();

  const promptLogin = () => {
    dispatch(modalActions.setLoginPromptModalOpen(true));
  };

  return promptLogin;
};

export default usePromptLogin;
