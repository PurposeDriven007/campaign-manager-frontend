import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  isAuthenticated: boolean;
  accountType: string;
  role: string;
  name: string;
  email: string;
  actions: {
    users: string[];
    campaigns: string[];
    advertisers?: string[];
  };
}

const initialState: IUserState = {
  isAuthenticated: true,
  accountType: "advertiser",
  role: "admin",
  name: "Biswarup Bouri",
  email: "biswarup.bouri@verse.in",
  actions: {
    users: ["can_read", "can_udate"],
    campaigns: ["can_read", "can_update"],
    advertisers: ["can_read", "can_update"],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUserAuthentication } = userSlice.actions;
export default userSlice.reducer;
