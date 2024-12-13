import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
  isExpanded: boolean;
}
const initialState: IFilterState = {
  isExpanded: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setExpanded: (state, action: PayloadAction<boolean>) => {
      state.isExpanded = action.payload;
    },
  },
});

export const { setExpanded } = sidebarSlice.actions;
export default sidebarSlice.reducer;
