import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { settingActions } from "../store/settingSlice";

const useCommentSort = () => {
  const commentSort = useSelector((state) => state.setting.commentSort);

  const dispatch = useDispatch();

  const setCommentSort = (sort: "oldest" | "latest") => {
    dispatch(settingActions.setCommentSort(sort));
    localStorage.setItem("sort", sort);
  };

  useEffect(() => {
    const sort = localStorage.getItem("sort");

    if (sort === "oldest" || sort === "latest") {
      console.log("sort found");
      dispatch(settingActions.setCommentSort(sort));
    }
  }, [dispatch]);

  return { commentSort, setCommentSort };
};

export default useCommentSort;
