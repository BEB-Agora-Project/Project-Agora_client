import React from "react";
import styled from "@emotion/styled";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  overflow: auto;
`;

const Mypage: React.FC = () => {
  return (
    <Base>
      <p>mypage</p>
      <p>프로필 이미지</p>
      <p>프로필 수정</p>
      <p>보유 아이템</p>
      <p>보유 토큰 현황</p>
      <p>닉네임 수정</p>
      <p>자신이 썼던 글 내용</p>
    </Base>
  );
};

export default Mypage;
