import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserRegistrationState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isCompleted: boolean;
}

const initialState: IUserRegistrationState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isCompleted: false,
};

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<IUserRegistrationState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isCompleted = action.payload.isCompleted;
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { setForm, resetForm } = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
