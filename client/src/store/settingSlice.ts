import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface settingState {
  commentSort: "latest" | "oldest";
  viewType: "text" | "image";
}

const initialState: settingState = {
  commentSort: "oldest",
  viewType: "text",
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setCommentSort(state, action: PayloadAction<"oldest" | "latest">) {
      state.commentSort = action.payload;
    },
    setViewType(state, action: PayloadAction<"text" | "image">) {
      state.viewType = action.payload;
    },
  },
});

export const settingActions = { ...settingSlice.actions };

export default settingSlice;
