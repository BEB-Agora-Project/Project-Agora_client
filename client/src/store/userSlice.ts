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
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
