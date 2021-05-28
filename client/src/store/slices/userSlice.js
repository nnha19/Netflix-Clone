import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userObj, { rejectWithValue }) => {
    console.log(userObj);
    try {
      //send http request to the backend to create user.
    } catch (err) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export default userSlice.reducer;
