import React from "react";
import EmptyPostNotification from "../layout/EmptyPostNotification";
import LoadingSpinnerBox from "../layout/LoadingSpinnerBox";
import BoardPostCard from "./BoardPostCard";

interface Props {
  isLoading: boolean;
  viewType: "image" | "text";
  postList?: BoardPostListType;
  popularPostList?: PopularPostListType;
  tabValue: string | null;
  viewedPostList: string[];
  viewPost: (id: number) => void;
}

const BoardPostListContents: React.FC<Props> = ({
  isLoading,
  postList,
  popularPostList,
  tabValue,
  viewType,
  viewedPostList,
  viewPost,
}) => {
  return (
    <>
      {isLoading && <LoadingSpinnerBox height="18rem" />}
      {!isLoading &&
        postList &&
        tabValue !== "popular" &&
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
            badge={post.User.badge}
            viewType={viewType}
            viewed={viewedPostList.includes(String(post.id))}
            viewPost={viewPost}
            image={post.image_url}
          />
        ))}
      {!isLoading &&
        popularPostList &&
        tabValue === "popular" &&
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
            viewType={viewType}
            viewed={viewedPostList.includes(String(post.id))}
            viewPost={viewPost}
            image={post.image_url}
            isPopular
          />
        ))}
      {!isLoading && postList?.length === 0 && tabValue !== "popular" && (
        <EmptyPostNotification />
      )}
      {!isLoading &&
        popularPostList?.length === 0 &&
        tabValue === "popular" && <EmptyPostNotification />}
    </>
  );
};

export default BoardPostListContents;
