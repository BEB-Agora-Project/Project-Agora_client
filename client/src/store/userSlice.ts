import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  isLoggedIn: boolean;
  username: string;
  email: string;
  token: number;
}

const initialState: userState = {
  isLoggedIn: false,
  username: "",
  email: "",
  token: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUserInfo(state, action: PayloadAction<AuthenticateAPIResponseType>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
