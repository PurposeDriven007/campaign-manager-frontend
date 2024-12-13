import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  isAuthenticated: boolean;
}

const initialState: IUserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setUserAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUserAuthentication } = userSlice.actions;
export default userSlice.reducer;
