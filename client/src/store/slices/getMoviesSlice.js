import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getMovies = createAsyncThunk(
  "getMovies/getMoviesSlice",
  async (param, { rejectWithValue }) => {
    const allMovies = [];
    const { url, pageNum } = param;
    for (let i = 1; i < pageNum; i++) {
      const resp = await axios.get(url(i));
      allMovies.push(resp.data.results);
    }
    return allMovies.flat();
  }
);

const getMoviesSlice = createSlice({
  name: "getMovies",
  initialState: { singleMovies: [] },
  reducers: {
    setMovies(state, action) {
      state.singleMovies = action.payload;
    },
  },
  extraReducers: {
    [getMovies.fulfilled]: (state, action) => {
      state.singleMovies = action.payload;
    },
  },
});

export const getMoviesSliceActions = getMoviesSlice.actions;
export default getMoviesSlice.reducer;
