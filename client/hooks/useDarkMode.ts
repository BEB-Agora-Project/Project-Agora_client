import { useDispatch, useSelector } from "../store";
import { themeActions } from "../store/themeSlice";

const useDarkMode = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const dispatch = useDispatch();

  const setDarkMode = (isDarkMode: boolean) => {
    dispatch(themeActions.setDarkMode(isDarkMode));

    if (isDarkMode) localStorage.setItem("isDarkMode", "true");
    if (!isDarkMode) localStorage.setItem("isDarkMode", "false");
  };

  const toggleDarkMode = () => {
    dispatch(themeActions.toggleDarkMode());

    if (!isDarkMode) localStorage.setItem("isDarkMode", "true");
    if (isDarkMode) localStorage.setItem("isDarkMode", "false");
  };

  return { setDarkMode, toggleDarkMode };
};

export default useDarkMode;
