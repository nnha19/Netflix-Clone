import React, { useEffect, useState } from "react";

import axios from "axios";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const PopularMoviesPage = (props) => {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a31d02795054ebca84e5c9d45e915e85&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate"
      );
      setMoviesList(data.data.results);
    })();
  }, []);

  return moviesList ? (
    <ChildrenMovies title={"Popular Movies"} childrenMovies={moviesList} />
  ) : null;
};

export default PopularMoviesPage;
