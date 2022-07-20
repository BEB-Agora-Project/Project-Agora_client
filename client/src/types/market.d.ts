type GetNFTListAPIResponseType = {
  id: number;
  token_id: number;
  token_uri: string;
  image_uri: string;
  price: number;
  sold: boolean;
  createdAt: Date;
  updatedAt: Date;
  user_id: number;
};

type GetBadgeListAPIResponseType = {
  id: number;
  itemname: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

type PurchaseBadgeAPIBodyType = {
  itemId: number;
};
