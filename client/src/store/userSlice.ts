import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  isLoggedIn: "init" | boolean;
  nickname: string;
}

const initialState: userState = {
  isLoggedIn: "init",
  nickname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
