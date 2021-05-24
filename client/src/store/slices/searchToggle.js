import { createSlice } from "@reduxjs/toolkit";

const searchToggleSlice = createSlice({
  name: "searchToggle",
  initialState: {
    showSearch: false,
  },
  reducers: {
    showSearch(state, action) {
      state.showSearch = true;
    },
    hideSearch(state, action) {
      state.showSearch = state.hideAbleSearch && false;
    },
  },
});

export const searchToggleSliceActions = searchToggleSlice.actions;
export default searchToggleSlice.reducer;
