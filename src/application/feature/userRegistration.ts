import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserRegistrationState {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    permissions: {
      users?: {
        canRead: boolean;
        canUpdate: boolean;
      };
      accounts?: {
        canRead: boolean;
        canUpdate: boolean;
      };
      campaigns?: {
        canRead: boolean;
        canUpdate: boolean;
      };
    };
  };
  isCompleted: boolean;
  isValid: boolean;
  shouldSubmit: boolean;
}

const initialState: IUserRegistrationState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    permissions: {
      users: {
        canRead: false,
        canUpdate: false,
      },
      accounts: {
        canRead: false,
        canUpdate: false,
      },
      campaigns: {
        canRead: false,
        canUpdate: false,
      },
    },
  },
  isCompleted: false,
  isValid: false,
  shouldSubmit: false,
};

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<IUserRegistrationState>) => {
      state.form = action.payload.form;
      return state;
    },
    setCompleted: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
      return state;
    },
    setValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
      return state;
    },
    setShouldSubmit: (state, action: PayloadAction<boolean>) => {
      state.shouldSubmit = action.payload;
      return state;
    },
  },
});

export const { setForm, setCompleted, setValid, setShouldSubmit } =
  userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
