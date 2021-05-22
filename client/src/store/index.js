import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./slices/searchSlice";
import searchToggleSlice from "./slices/searchToggle";

const store = configureStore({
  reducer: {
    search: searchSlice,
    searchToggle: searchToggleSlice,
  },
});

export default store;
