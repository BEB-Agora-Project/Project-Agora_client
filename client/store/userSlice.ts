import { createSlice } from "@reduxjs/toolkit";

interface userState {
  isLoggedIn: boolean;
}

const initialState: userState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
});

export const userActions = { ...userSlice.actions };

export default userSlice;
