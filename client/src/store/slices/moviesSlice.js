import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getAllMovies = createAsyncThunk(
  "movies,getAllMovies",
  async (arr, { rejectWithValue }) => {
    try {
      const finalObj = {};

      const func = async (url) => {
        const resp = await axios.get(url);
        return resp.data.results;
      };

      const result = async () => {
        return Promise.all(arr.map((arr) => func(arr.url)));
      };

      const finalResult = await result();
      arr.map((arr, i) => {
        const title = arr.title.replaceAll(" ", "");
        finalObj[title] = finalResult[i];
      });
      return finalObj;
    } catch (err) {
      console.log(err);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  reducers: {
    setMovies(state, action) {
      const { title, movies } = action.payload;
      state.movies[title] = movies;
    },
    setMovieList(state, action) {
      const { title, index } = action.payload;
      const oldState = [...state.movies[title]];
      oldState[index].myList = true;
      state.movies[title] = oldState;
    },
  },
  extraReducers: {
    [getAllMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const moviesSliceActions = moviesSlice.actions;
export default moviesSlice.reducer;
