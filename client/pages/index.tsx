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

const Home: NextPage = () => {
  return (
    <Layout>
      <Base>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
        <p>컨텐츠</p>
      </Base>
    </Layout>
  );
};

export default Home;
