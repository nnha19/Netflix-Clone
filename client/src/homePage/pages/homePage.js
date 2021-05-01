import React from "react";

import HomePageDisplayPage from "./homePageDisplayPage";
import ChildrenMoviesPage from "./childrenMoviesPage";
import PopularMoviesPage from "./popularMoviesPage";
import PopularTvPage from "./popularTvPage";

const homePage = (props) => {
  return (
    <>
      <HomePageDisplayPage />
      <ChildrenMoviesPage />
      <PopularMoviesPage />
      <PopularTvPage />
    </>
  );
};

export default homePage;
