import React, { useEffect, useState } from "react";
import PaperLayout from "../../components/layout/PaperLayout";
import useProtectPage from "../../hooks/useProtectPage";
import { getMyPageInfoAPI } from "../../lib/api/user";
import { useSelector } from "../../store";
import LoadingPage from "../LoadingPage";
import MyPost from "../../components/mypage/MyPost";
import MyProfile from "../../components/mypage/MyProfile";
import MyBadge from "../../components/mypage/MyBadge";
import MyNFT from "../../components/mypage/MyNFT";
import { Divider } from "@mui/material";

const Mypage: React.FC = () => {
  const [myPageInfo, setMyPageInfo] = useState<GetMyPageInfoAPIResponseType>();
  const [isLoading, setIsLoading] = useState(true);

  const username = useSelector((state) => state.user.username);

  const protectPage = useProtectPage();

  const fetchMyPageInfo = async () => {
    /*********************** API call **************************/
    try {
      const response = await getMyPageInfoAPI();
      console.log("MyPage.tsx | getMyPageInfoAPI response");
      console.log(response);
      setMyPageInfo(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("MyPage.tsx | getMyPageInfoAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("protecting");
    protectPage();
  }, [protectPage]);

  useEffect(() => {
    fetchMyPageInfo();
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <PaperLayout>
      <MyProfile refetch={fetchMyPageInfo} />
      <Divider />
      <MyBadge myPageInfo={myPageInfo} />
      <Divider />
      <MyNFT myPageInfo={myPageInfo} />
      <Divider />
      <MyPost myPageInfo={myPageInfo} username={username} />
    </PaperLayout>
  );
};

export default Mypage;
