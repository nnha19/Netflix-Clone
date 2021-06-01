import { createSlice } from "@reduxjs/toolkit";

const fixedNavSlice = {
  name: "fixedNav",
  initialState: { fixedNav: false },
  reducers: {
    fixNav(state, action) {
      state.fixedNav = action.payload;
    },
  },
};

const fixedNavSliceActions = fixedNavSlice.actions;
export default fixedNavSlice.reducer;
