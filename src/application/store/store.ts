import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../feature/sidebar";
import userReducer from "../feature/user";
import userRegistrationReducer from "../feature/userRegistration";
import advertiserSignupReducer from "../feature/advertiser-signup";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
    userRegistration: userRegistrationReducer,
    advertiserSignup: advertiserSignupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
