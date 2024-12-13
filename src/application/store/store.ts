import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../feature/sidebar";
import userReducer from "../feature/user";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
