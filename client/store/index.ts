import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import {
  TypedUseSelectorHook,
  useDispatch as useTypedDispatch,
  useSelector as useTypedSelector,
} from "react-redux";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";

const makeStore: MakeStore<any> = () =>
  configureStore({
    reducer: {
      user: userSlice.reducer,
      theme: themeSlice.reducer,
    },
  });

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

export const useDispatch: () => AppDispatch = useTypedDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useTypedSelector;

export const wrapper = createWrapper(makeStore);
