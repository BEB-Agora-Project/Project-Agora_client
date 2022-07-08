import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layouts/Layout";
import { theme } from "../styles/theme";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  overflow: auto;

  @media screen and (min-width: ${theme.media.tablet}) {
    padding: 2rem;
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    margin: 0 auto;
  }
`;

const Mypage: NextPage = () => {
  return (
    <Layout>
      <Base>
        <p>mypage</p>
        <p>프로필 이미지</p>
        <p>프로필 수정</p>
        <p>보유 아이템</p>
        <p>보유 토큰 현황</p>
        <p>닉네임 수정</p>
        <p>자신이 썼던 글 내용</p>
      </Base>
    </Layout>
  );
};

export default Mypage;
