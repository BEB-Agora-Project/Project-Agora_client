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
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
