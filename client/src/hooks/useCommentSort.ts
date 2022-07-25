import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { commentActions } from "../store/commentSlice";

const useCommentSort = () => {
  const commentSort = useSelector((state) => state.comment.commentSort);

  const dispatch = useDispatch();

  const setCommentSort = (sort: "oldest" | "latest") => {
    dispatch(commentActions.setCommentSort(sort));
    localStorage.setItem("sort", sort);
  };

  useEffect(() => {
    const sort = localStorage.getItem("sort");
    if (sort === ("oldest" || "latest")) {
      dispatch(commentActions.setCommentSort(sort));
    }
  }, [dispatch]);

  return { commentSort, setCommentSort };
};

export default useCommentSort;
