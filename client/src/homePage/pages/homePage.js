import React from "react";

import HomePageDisplayPage from "./homePageDisplayPage";
import ChildrenMoviesPage from "./childrenMoviesPage";

const homePage = (props) => {
  return (
    <>
      <HomePageDisplayPage />
      <ChildrenMoviesPage />
    </>
  );
};

export default homePage;
