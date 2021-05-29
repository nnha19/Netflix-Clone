import { createSlice } from "@reduxjs/toolkit";

const loginModeSlice = createSlice({
  name: "loginMode",
  initialState: { loginMode: true },
  reducers: {
    setLoginMode(state, action) {
      state.loginMode = action.payload;
    },
  },
});
export const loginModeSliceActions = loginModeSlice.actions;
export default loginModeSlice.reducer;
