import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getMovies = createAsyncThunk(
  "getMovies/getMoviesSlice",
  async (param, { rejectWithValue }) => {
    const resp = await axios.get(param.url);
    return resp.data.results;
  }
);

const getMoviesSlice = createSlice({
  name: "getMovies",
  initialState: { movies: [] },
  reducers: {},
  extraReducers: {
    [getMovies.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default getMoviesSlice.reducer;
