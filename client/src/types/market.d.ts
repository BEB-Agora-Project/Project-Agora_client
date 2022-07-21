type GetNFTListAPIResponseType = {
  id: number;
  name: string;
  image_uri: string;
  price: number;
  description: string;
}[];

type GetBadgeListAPIResponseType = {
  id: number;
  itemname: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}[];

type PurchaseBadgeAPIBodyType = {
  itemId: number;
};

type PurchaseNFTAPIBodyType = {
  nftId: number;
};
