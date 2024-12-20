import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  isAuthenticated: boolean;
  accountType: string;
  role: string;
  name: string;
  email: string;
  permissions?: {
    users: {
      canRead: boolean;
      canUpdate: boolean;
    };
    campaigns: {
      canRead: boolean;
      canUpdate: boolean;
    };
    advertisers?: {
      canRead: boolean;
      canUpdate: boolean;
    };
  };
}

const userSlice = createSlice({
  name: "user",
  initialState: () => {
    const raw = localStorage.getItem("user") || "{}";
    const data = JSON.parse(raw);
    return {
      ...data,
    };
  },
  reducers: {
    setUserAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserAuthentication, setUser } = userSlice.actions;
export default userSlice.reducer;
