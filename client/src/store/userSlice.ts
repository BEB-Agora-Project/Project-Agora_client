import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  isLoggedIn: boolean;
  username: string;
  email: string;
  token: number;
  nft: {
    id: number;
    name: string;
    image: string;
  }[];
  badge: {
    Normalitem: {
      user_id: number;
      itemname: string;
    };
  }[];
}

const initialState: userState = {
  isLoggedIn: false,
  username: "",
  email: "",
  token: 0,
  nft: [],
  badge: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setUserInfo(state, action: PayloadAction<AuthenticateAPIResponseType>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.nft = action.payload.nft;
      state.badge = action.payload.item;
    },
    setUserLoggedOut(state) {
      state.isLoggedIn = false;
      state.username = "";
      state.email = "";
      state.token = 0;
      state.nft = [];
      state.badge = [];
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
