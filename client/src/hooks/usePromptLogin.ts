import { useDispatch } from "../store";
import { modalActions } from "../store/modalSlice";

const usePromptLogin = () => {
  const dispatch = useDispatch();

  const promptLogin = () => {
    dispatch(modalActions.setIsLoginPromptModalOpen(true));
  };

  return promptLogin;
};

export default usePromptLogin;
