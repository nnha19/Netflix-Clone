import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./slices/searchSlice";
import searchToggleSlice from "./slices/searchToggle";
import moviesSlice from "./slices/moviesSlice";
import userSlice from "./slices/userSlice";
import loginModeSlice from "./slices/loginModeSlice";
import userInfoSlice from "./slices/userInfo";
import fixedNavSlice from "./slices/fixedNavSlice";
import getMoviesSlice from "./slices/getMoviesSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    searchToggle: searchToggleSlice,
    movies: moviesSlice,
    user: userSlice,
    loginMode: loginModeSlice,
    userInfo: userInfoSlice,
    fixedNav: fixedNavSlice,
    getMovies: getMoviesSlice,
  },
});

export default store;
