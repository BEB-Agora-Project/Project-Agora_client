import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Layout from "../../components/Layout";
import { theme } from "../../styles/theme";

const Base = styled.div`
  margin: 1rem;

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 1rem auto;
    width: 37.5rem;
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    width: 50rem;
  }
`;

const BoardList: React.FC = () => {
  return (
    <Layout>
      <Base>
        <Link to="/board/1">
          <Button>게시판1</Button>
        </Link>
        <Link to="/board/2">
          <Button>게시판2</Button>
        </Link>
      </Base>
    </Layout>
  );
};

export default BoardList;
