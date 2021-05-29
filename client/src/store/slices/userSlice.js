import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userObj, { rejectWithValue }) => {
    console.log(userObj);
    try {
      const { type, email, password } = userObj;
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/user/${type}`,
        method: "post",
        data: { email, password },
      });
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    loading: false,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.isAuthenticated = !!action.payload.token;
    },
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
