import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalState {
  loginPromptModalOpen: boolean;
}

const initialState: modalState = {
  loginPromptModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setLoginPromptModalOpen(state, action: PayloadAction<boolean>) {
      state.loginPromptModalOpen = action.payload;
    },
  },
});

export const modalActions = { ...modalSlice.actions };

export default modalSlice;
