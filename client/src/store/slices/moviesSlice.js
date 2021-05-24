import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { useCallback } from "react";

export const getAllMovies = createAsyncThunk(
  "movies,getAllMovies",
  async (arr, { rejectWithValue }) => {
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
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAllMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
