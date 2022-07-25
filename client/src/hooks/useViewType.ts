import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { settingActions } from "../store/settingSlice";

const useViewType = () => {
  const viewType = useSelector((state) => state.setting.viewType);

  const dispatch = useDispatch();

  const setViewType = (viewType: "text" | "image") => {
    dispatch(settingActions.setViewType(viewType));
    localStorage.setItem("view", viewType);
  };

  useEffect(() => {
    const view = localStorage.getItem("view");
    if (view === "text" || view === "image") {
      dispatch(settingActions.setViewType(view));
    }
  }, [dispatch]);

  return { viewType, setViewType };
};

export default useViewType;
