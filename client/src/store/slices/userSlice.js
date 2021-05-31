import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userObj, { rejectWithValue }) => {
    try {
      const { type, email, password } = userObj;
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/user/${type}`,
        method: "post",
        data: { email, password },
      });
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

export const likeMovie = createAsyncThunk(
  "likeMovie/user",
  async (param, { rejectWithValue }) => {
    //param contains movie id and userId and type
    try {
      const { movieId, userId, type } = param;
      console.log(userId);
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/${userId}/movie/${movieId}`,
        method: "post",
        data: { type },
      });
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    loading: false,
    isAuthenticated: false,
    error: null,
    userId: null,
  },
  reducers: {
    deleteError(state, action) {
      state.error = false;
    },
  },
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.isAuthenticated = !!action.payload.token;
      state.userId = action.payload.userId;
      state.likeMovies = action.payload.likeMovies;
      state.disLikeMovies = action.payload.disLikeMovies;
    },
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
