import { useDispatch } from "../store";
import { modalActions } from "../store/modalSlice";

const usePromtLogin = () => {
  const dispatch = useDispatch();

  const promtLogin = () => {
    dispatch(modalActions.setLoginPromptModalOpen(true));
  };

  return promtLogin;
};

export default usePromtLogin;
