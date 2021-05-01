import React from "react";

import HomePageDisplayPage from "./homePageDisplayPage";
import ChildrenMoviesPage from "./childrenMoviesPage";
import MoviesListPage from "./moviesListPage";

const homePage = (props) => {
  return (
    <>
      <HomePageDisplayPage />
      <ChildrenMoviesPage />
      <MoviesListPage />
    </>
  );
};

export default homePage;
