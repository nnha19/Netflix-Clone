import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getResulsForSearch = createAsyncThunk(
  "search/getResultsForSearch",
  async (query, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return resp.data.results;
    } catch (err) {
      alert(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: { searchResults: [], searchValue: "" },
  reducers: {
    setChildrenMovies(state, action) {
      state.searchResults = action.payload;
    },
  },
  extraReducers: {
    [getResulsForSearch.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const searchSliceActions = searchSlice.actions;
export default searchSlice.reducer;
