import React, { useEffect, useState } from "react";

import axios from "axios";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const PopularTvPage = (props) => {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=a31d02795054ebca84e5c9d45e915e85&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York"
      );
      setMoviesList(data.data.results);
    })();
  }, []);

  return moviesList ? (
    <ChildrenMovies title={"Popular Tv Show"} childrenMovies={moviesList} />
  ) : null;
};

export default PopularTvPage;
