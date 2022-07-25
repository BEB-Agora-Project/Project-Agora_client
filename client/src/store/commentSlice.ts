import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commentState {
  commentSort: "latest" | "oldest";
}

const initialState: commentState = {
  commentSort: "oldest",
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setCommentSort(state, action: PayloadAction<"oldest" | "latest">) {
      state.commentSort = action.payload;
    },
  },
});

export const commentActions = { ...commentSlice.actions };

export default commentSlice;
