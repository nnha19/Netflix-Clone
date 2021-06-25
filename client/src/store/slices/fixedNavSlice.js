import { createSlice } from "@reduxjs/toolkit";

const fixedNavSlice = createSlice({
  name: "fixedNav",
  initialState: { fixedNav: false },
  reducers: {
    fixNav(state, action) {
      state.fixedNav = action.payload;
    },
  },
});

const fixedNavSliceActions = fixedNavSlice.actions;
export default fixedNavSlice.reducer;
