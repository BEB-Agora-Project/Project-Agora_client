import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import Button from "../../components/common/buttons/Button";
import IconButton from "../../components/common/buttons/IconButton";
import Divider from "../../components/common/Divider";
import Input from "../../components/common/inputs/Input";
import Tab from "../../components/common/tabs/Tab";
import Tabs from "../../components/common/tabs/Tabs";
import CommunityPostCard from "../../components/community/CommunityPostCard";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/Pagination";
import { FAKE_ARRAY } from "../../lib/dummyData";
import { theme } from "../../styles/theme";

const Base = styled.div`
  .community-title-area {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    margin-top: 2rem;
  }

  .community-title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .tab-wrapper {
    margin: 1rem 0;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .community-search-input-wrapper {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .community-search-input {
    width: 16rem; // 256px
    margin-left: 3rem;
  }

  @media screen and (min-width: ${theme.media.tablet}) {
    margin: 1rem auto;
    width: 37.5rem;
  }

  @media screen and (min-width: ${theme.media.labtop}) {
    width: 52.5rem;
  }
`;

const Community: NextPage = () => {
  const [activeTab, setActiveTab] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const onClickSearchButton = () => {};

  return (
    <Layout>
      <Base>
        <div className="community-title-area">
          <p className="community-title">{router.query.id}</p>
          <Button variant="contained">글쓰기</Button>
        </div>
        <div className="tab-wrapper">
          <Tabs>
            <Tab
              label="전체"
              active={activeTab === "전체"}
              onClick={() => setActiveTab("전체")}
            />
            <Tab
              label="인기글"
              active={activeTab === "인기글"}
              onClick={() => setActiveTab("인기글")}
            />
          </Tabs>
          <Divider />
        </div>
        <div className="post-wrapper">
          {FAKE_ARRAY.map((_, index) => (
            <CommunityPostCard
              key={index}
              postId={1}
              title="제목입니다"
              commentCount={1}
              nickname="노논"
              createdAt="0000년 00월 00일 00:00:00"
              views={123}
              likes={2}
            />
          ))}
        </div>
        <div className="pagination-wrapper">
          <Pagination
            totalPosts={100}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="community-search-input-wrapper">
          <Input
            className="community-search-input"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <IconButton onClick={onClickSearchButton}>
            <MdSearch size="1.5rem" />
          </IconButton>
        </div>
      </Base>
    </Layout>
  );
};

export default Community;
