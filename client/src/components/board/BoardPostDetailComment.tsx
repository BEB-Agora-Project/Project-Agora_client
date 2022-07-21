import { Divider } from "@mui/material";
import React from "react";
import EmptyCommentNotification from "../layout/EmptyCommentNotification";
import BoardCommentCard from "./BoardCommentCard";

interface Props {
  commentList?: GetCommentListResponseType;
  fetchCommentList: () => void;
}

const BoardPostDetailComment: React.FC<Props> = ({
  commentList,
  fetchCommentList,
}) => {
  return (
    <>
      {commentList &&
        commentList.map((comment, index) => (
          <BoardCommentCard
            key={index}
            username={comment?.User?.username}
            createdAt={comment?.createdAt}
            commentContents={comment?.content}
            commentId={comment?.id}
            refetch={fetchCommentList}
            image={comment.image}
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
