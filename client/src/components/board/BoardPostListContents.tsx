import React from "react";
import EmptyPostNotification from "../layout/EmptyPostNotification";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";
import BoardPostCard from "./BoardPostCard";

interface Props {
  isLoading: boolean;
  postList?: BoardPostListType;
  popularPostList?: PopularPostListType;
  sortParams: string | null;
}

const BoardPostListContents: React.FC<Props> = ({
  isLoading,
  postList,
  popularPostList,
  sortParams,
}) => {
  return (
    <>
      {isLoading && <LoadingSpinnerBox height="18rem" />}
      {!isLoading &&
        postList &&
        sortParams !== "popular" &&
        postList.map((post, index) => (
          <BoardPostCard
            key={index}
            postId={post.id}
            title={post.title}
            commentCount={post.Comments.length}
            username={post.User.username}
            createdAt={post.createdAt}
            views={post.hit}
            likes={post.up}
            image
          />
        ))}
      {!isLoading &&
        popularPostList &&
        sortParams === "popular" &&
        popularPostList.map((post, index) => (
          <BoardPostCard
            key={index}
            postId={post.id}
            title={post.title}
            commentCount={post.Comments.length}
            username={post.User.username}
            createdAt={post.createdAt}
            views={post.hit}
            likes={post.up}
            image
            isPopular
          />
        ))}
      {!isLoading && postList?.length === 0 && sortParams !== "popular" && (
        <EmptyPostNotification />
      )}
      {!isLoading &&
        popularPostList?.length === 0 &&
        sortParams === "popular" && <EmptyPostNotification />}
    </>
  );
};

export default BoardPostListContents;
