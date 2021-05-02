import React, { useEffect, useState } from "react";

import axios from "axios";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";
import { FetchData as useFetchData } from "../../customHooks/fetchData";

const PopularMoviesPage = (props) => {
  const [popularMovies, fetch] = useFetchData(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`,
      "get"
    );
  }, []);
  console.log(popularMovies);

  return popularMovies ? (
    <ChildrenMovies title={"Popular Movies"} childrenMovies={popularMovies} />
  ) : null;
};

export default PopularMoviesPage;
