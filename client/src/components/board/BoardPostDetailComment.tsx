import { Divider } from "@mui/material";
import React from "react";
import EmptyCommentNotification from "../layout/EmptyCommentNotification";
import BoardCommentCard from "./BoardCommentCard";

interface Props {
  commentList?: GetCommentListResponseType;
  commentSort: "oldest" | "latest";
  fetchCommentList: () => void;
}

const BoardPostDetailComment: React.FC<Props> = ({
  commentList,
  commentSort,
  fetchCommentList,
}) => {
  return (
    <>
      {commentList &&
        commentSort === "oldest" &&
        commentList.map((comment, index) => (
          <BoardCommentCard
            key={index}
            commentDetail={comment}
            refetch={fetchCommentList}
          />
        ))}
      {commentList &&
        commentSort === "latest" &&
        [...commentList]
          .reverse()
          .map((comment, index) => (
            <BoardCommentCard
              key={index}
              commentDetail={comment}
              refetch={fetchCommentList}
            />
          ))}
      <Divider />
      {commentList && commentList.length === 0 && (
        <>
          <EmptyCommentNotification />
          <Divider />
        </>
      )}
    </>
  );
};

export default BoardPostDetailComment;
