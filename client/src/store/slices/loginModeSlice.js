import { createSlice } from "@reduxjs/toolkit";

const loginModeSlice = createSlice({
  name: "loginMode",
  initialState: true,
  reducers: {
    setLoginMode(state, action) {
      state = action.payload;
    },
  },
});
export const loginModeSliceActions = loginModeSlice.actions;
export default loginModeSlice.reducer;
