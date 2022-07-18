import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalState {
  isLoginPromptModalOpen: boolean;
  isBoardCreateModalOpen: boolean;
  isEmojiCommentModalOpen: boolean;
}

const initialState: modalState = {
  isLoginPromptModalOpen: false,
  isBoardCreateModalOpen: false,
  isEmojiCommentModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    setIsLoginPromptModalOpen(state, action: PayloadAction<boolean>) {
      state.isLoginPromptModalOpen = action.payload;
    },
    setIsBoardCreateModalOpen(state, action: PayloadAction<boolean>) {
      state.isBoardCreateModalOpen = action.payload;
    },
    setIsEmojiCommentModalOpen(state, action: PayloadAction<boolean>) {
      state.isEmojiCommentModalOpen = action.payload;
    },
  },
});

export const modalActions = { ...modalSlice.actions };

export default modalSlice;
