import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  isLoggedIn: boolean;
  nickname: string;
}

const initialState: userState = {
  isLoggedIn: false,
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
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
