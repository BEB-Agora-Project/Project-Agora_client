import React, { useState } from "react";
import styled from "@emotion/styled";
import palette from "../styles/palette";
import Button from "./common/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Divider, IconButton } from "@mui/material";
import Textarea from "./common/Textarea";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .comment-contents {
    padding-bottom: 0.5rem;
  }

  .comment-metadata {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 1rem;
  }

  .comment-profile-image-wrapper {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }

  .comment-profile-image {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .comment-metadata-left-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .comment-metadata-right-area {
    display: flex;
    gap: 0.5rem;

    height: 1rem;
    font-size: 0.875rem;
    color: ${palette.gray[700]};
  }

  .comment-author {
    color: ${palette.gray[600]};
    font-size: 0.875rem;
    font-weight: 500;
  }

  .comment-date {
    color: ${palette.gray[500]};
    font-size: 0.875rem; // 14px
  }

  .comment-edit,
  .comment-delete {
    cursor: pointer;
  }

  .edit-textarea {
    height: 6rem;
  }

  .submit-button-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    color: ${palette.gray[400]};
  }

  .comment-dropdown-wrapper {
    position: relative;
  }

  .comment-dropdown {
    top: 2.8rem;
    right: 0;
  }
`;

interface Props {
  nickname: string;
  createdAt: string;
  commentContents: string;
  commentId: number;
  refresh?: () => void;
}

const CommentCard: React.FC<Props> = ({
  nickname,
  createdAt,
  commentContents,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(commentContents);

  const isMyComment = true;

  const onChangeEditText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(event.target.value);
  };

  const onClickEditButton = () => {
    setEditMode((editMode) => !editMode);
  };

  const onClickDeleteButton = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
    }
  };

  const onClickSubmitButton = async () => {
    if (editText.length > 200) {
      alert("댓글 길이 제한 수를 초과하였습니다.");
      return;
    }
  };

  return (
    <Base>
      <Divider />
      <div className="comment-metadata">
        <div className="comment-metadata-left-area">
          <Avatar sx={{ width: "24px", height: "24px" }} />
          <p className="comment-author">{nickname}</p>
          <p className="comment-date">{createdAt}</p>
        </div>
        <div className="comment-metadata-right-area">
          {isMyComment && (
            <>
              <p className="comment-edit" onClick={onClickEditButton}>
                {editMode ? "취소" : "수정"}
              </p>
              <p className="comment-delete" onClick={onClickDeleteButton}>
                삭제
              </p>
            </>
          )}
          {!isMyComment && (
            <div className="comment-dropdown-wrapper">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      {editMode && (
        <>
          <Textarea
            className="edit-textarea"
            value={editText}
            onChange={onChangeEditText}
          />
          <div className="submit-button-wrapper">
            <p>({editText.length}/200자)</p>
            <Button variant="contained" onClick={onClickSubmitButton}>
              수정하기
            </Button>
          </div>
        </>
      )}
      {!editMode && <p className="comment-contents">{commentContents}</p>}
    </Base>
  );
};

export default CommentCard;
