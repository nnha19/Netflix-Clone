import React, { useState, useEffect } from "react";

import HomePageDisplayPage from "./homePageDisplayPage";
import ChildrenMoviesPage from "./childrenMoviesPage";
import PopularMoviesPage from "./popularMoviesPage";
import PopularTvPage from "./popularTvPage";

const HomePage = (props) => {
  const [allMovieList, setAllMovieList] = useState([]);

  const setAllMovieListHandler = (movie) => {
    movie && setAllMovieList([...allMovieList, movie]);
  };

  return (
    <>
      <HomePageDisplayPage />
      <ChildrenMoviesPage
        setAllMovie={(movie) => setAllMovieListHandler(movie)}
      />
      <PopularMoviesPage
        setAllMovie={(movie) => setAllMovieListHandler(movie)}
      />
      <PopularTvPage setAllMovie={(movie) => setAllMovieListHandler(movie)} />
    </>
  );
};

export default HomePage;
