import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState: { showDropDown: false },
  reducers: {
    toggleDropDown(state, action) {
      state.showDropDown = action.payload;
    },
  },
});

export const dropDownSliceActions = dropDownSlice.actions;
export default dropDownSlice.reducer;
