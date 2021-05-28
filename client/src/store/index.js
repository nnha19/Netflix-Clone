import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./slices/searchSlice";
import searchToggleSlice from "./slices/searchToggle";
import moviesSlice from "./slices/moviesSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    searchToggle: searchToggleSlice,
    movies: moviesSlice,
    user: userSlice,
  },
});

export default store;
