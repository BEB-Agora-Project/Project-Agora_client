import { useEffect, useState } from "react";

const useViewPost = () => {
  const [viewedPostList, setViewedPostList] = useState<string[]>([]);

  useEffect(() => {
    const viewedPostList = localStorage.getItem("viewed");

    if (viewedPostList) setViewedPostList(viewedPostList.split(","));
  }, []);

  const viewPost = (id: number) => {
    localStorage.setItem(
      "viewed",
      `${viewedPostList.join(",")},${id}
    `
    );
  };

  return { viewedPostList, viewPost };
};

export default useViewPost;
