import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAdvertiserSignupState {
  currentStep: number;
  formTitle: string;
  isEmailVerifies: boolean;
  email: string;
}
const initialState: IAdvertiserSignupState = {
  currentStep: 1,
  formTitle: "Email Verification",
  isEmailVerifies: false,
  email: "",
};

const advertiserSignupSlice = createSlice({
  name: "advertiserSignup",
  initialState,
  reducers: {
    setNextStep: (state) => {
      if (state.isEmailVerifies && state.currentStep < 2) {
        state.currentStep += 1;
        state.formTitle =
          state.currentStep === 2 ? "Advertiser Details" : state.formTitle;
      }
      return state;
    },
    setVerfiedEmail: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerifies = action.payload;
      return state;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      return state;
    },
  },
});

export const { setNextStep, setVerfiedEmail, setEmail } =
  advertiserSignupSlice.actions;
export default advertiserSignupSlice.reducer;
