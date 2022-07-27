import React, { useEffect, useState } from "react";
import useProtectPage from "../../hooks/useProtectPage";
import ChangePassword from "../../components/account/ChangePassword";
import PaperLayout from "../../components/layout/PaperLayout";
import { getMyPageInfoAPI } from "../../lib/api/user";
import LoadingPage from "../LoadingPage";
import AccountInfo from "../../components/account/AccountInfo";
import AccountWithdrawal from "../../components/account/AccountWithdrawal";

const Account: React.FC = () => {
  const [myPageInfo, setMyPageInfo] = useState<GetMyPageInfoAPIResponseType>();

  const [isLoading, setIsLoading] = useState(true);

  const protectPage = useProtectPage();

  const onClickWithdrawalButton = () => {
    window.confirm("한번 탈퇴하면 되돌릴 수 없습니다. 탈퇴하시겠습니까?");
  };

  const fetchMyPageInfo = async () => {
    /*********************** API call **************************/
    try {
      const response = await getMyPageInfoAPI();
      console.log("AccountPage.tsx | getMyPageInfoAPI response");
      console.log(response);
      setMyPageInfo(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("AccountPage.tsx | getMyPageInfoAPI error");
      console.log(error);
    }
  };

  useEffect(() => {
    protectPage();
  }, [protectPage]);

  useEffect(() => {
    fetchMyPageInfo();
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <PaperLayout width="40rem">
      <AccountInfo myPageInfo={myPageInfo} />
      <ChangePassword />
      <AccountWithdrawal onClickWithdrawalButton={onClickWithdrawalButton} />
    </PaperLayout>
  );
};

export default Account;
