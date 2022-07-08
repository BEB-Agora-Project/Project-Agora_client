import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Layout from "../components/Layout";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .row {
    display: flex;
    gap: 1rem;
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Base>
        <div className="row">
          <Button variant="contained" onClick={() => navigate("/mypage")}>
            마이페이지
          </Button>
          <Button variant="contained" onClick={() => navigate("/market")}>
            마켓
          </Button>
          <Button variant="contained" onClick={() => navigate("/discuss")}>
            토론
          </Button>
        </div>
        <div className="row">
          <Button variant="contained" onClick={() => navigate("/login")}>
            로그인
          </Button>
          <Button variant="contained" onClick={() => navigate("/signup")}>
            회원가입
          </Button>
          <Button variant="contained" onClick={() => navigate("/board")}>
            게시판
          </Button>
        </div>
      </Base>
    </Layout>
  );
};

export default Home;
