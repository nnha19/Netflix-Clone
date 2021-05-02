import React, { useEffect, useState } from "react";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";
import { FetchData as useFetchData } from "../../customHooks/fetchData";

const PopularMoviesPage = (props) => {
  const [popularMovies, fetch] = useFetchData(null);
  const title = "Popular Movies";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=97&with_watch_monetization_types=flatrate`,
      "get"
    );
  }, []);

  useEffect(() => {
    popularMovies &&
      popularMovies.length > 0 &&
      props.setAllMovie({ [title]: popularMovies });
  }, [popularMovies]);

  return popularMovies ? (
    <ChildrenMovies title={title} childrenMovies={popularMovies} />
  ) : null;
};

export default PopularMoviesPage;
