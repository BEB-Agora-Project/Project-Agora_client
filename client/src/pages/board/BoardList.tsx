import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Layout from "../../components/Layout";

const Base = styled.div`
  margin: 1rem;
`;

const BoardList: React.FC = () => {
  return (
    <Layout>
      <Base>
        <Link to="/board/자유게시판">
          <Button>게시판</Button>
        </Link>
      </Base>
    </Layout>
  );
};

export default BoardList;
