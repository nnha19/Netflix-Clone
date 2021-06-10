import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getMovies = createAsyncThunk(
  "getMovies/getMoviesSlice",
  async (param, { rejectWithValue }) => {
    const allMovies = [];
    const { url, pageNum, title } = param;
    for (let i = 1; i < pageNum; i++) {
      const resp = await axios.get(url(i));
      allMovies.push(resp.data.results);
    }
    const movies = allMovies.flat();
    console.log(movies);
    return { movies, title };
  }
);

const getMoviesSlice = createSlice({
  name: "getMovies",
  initialState: { singleMovies: {} },
  reducers: {
    setMovies(state, action) {
      const { movies, title } = action.payload;
      state.singleMovies[title] = movies;
    },
  },
  extraReducers: {
    [getMovies.fulfilled]: (state, action) => {
      const { title, movies } = action.payload;
      state.singleMovies[title] = movies;
    },
  },
});

export const getMoviesSliceActions = getMoviesSlice.actions;
export default getMoviesSlice.reducer;
