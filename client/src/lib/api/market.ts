import axios from "axios";

const axiosMarket = axios.create({
  baseURL: "https://agora1123.herokuapp.com",
  withCredentials: true,
});

// 판매중인 NFT 목록 조회
export const getNFTListAPI = () =>
  axiosMarket.get<GetNFTListAPIResponseType>("/market/nft");

// 판매중인 뱃지 목록 조회
export const getBadgeListAPI = () =>
  axiosMarket.get<GetBadgeListAPIResponseType>("/market/normalitem");

// 뱃지 구매
export const purchaseBadgeAPI = (body: PurchaseBadgeAPIBodyType) =>
  axiosMarket.post("/market/normalitem", body);
