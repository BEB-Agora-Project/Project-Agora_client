type SubmitDiscussPostBodyType = {
  opinion: string;
  title: string;
  content: string;
};

type GetDiscussPostsResponseType = {
  id: number;
  title: string;
  content: string;
  hit: number;
  opinion: number;
  up: number;
  down: number;
  createdAt: Date;
  updatedAt: Date;
  board_id: null;
  debate_id: number;
  user_id: number;
}[];

type GetArchivedDiscussPostsResponseType = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}[];

type UpdateDiscussPostBodyType = {
  opinion: string;
  title: string;
  content: string;
};
