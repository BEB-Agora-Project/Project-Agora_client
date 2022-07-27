import React from "react";
import { useNavigate } from "react-router-dom";
import PostNotFound from "../../components/board/PostNotFound";
import PaperLayout from "../../components/layout/PaperLayout";

const PostNotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const onClickReturnButton = () => {
    navigate(-1);
  };

  return (
    <PaperLayout>
      <PostNotFound onClickReturnButton={onClickReturnButton} />
    </PaperLayout>
  );
};

export default PostNotFoundPage;
