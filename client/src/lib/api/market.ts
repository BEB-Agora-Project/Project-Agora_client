import axios from ".";

// 판매중인 NFT 목록 조회
export const getNFTListAPI = () =>
  axios.get<GetNFTListAPIResponseType>("/market/nft");

// 판매중인 뱃지 목록 조회
export const getBadgeListAPI = () =>
  axios.get<GetBadgeListAPIResponseType>("/market/normalitem");

// 뱃지 구매
export const purchaseBadgeAPI = (body: PurchaseBadgeAPIBodyType) =>
  axios.post("/market/normalitem", body);

// NFT 구매
export const purchaseNFTAPI = (body: PurchaseNFTAPIBodyType) =>
  axios.post("/market/nft", body);
