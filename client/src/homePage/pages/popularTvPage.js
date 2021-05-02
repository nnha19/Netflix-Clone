import React, { useEffect, useState } from "react";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";
import { FetchData as useFetchData } from "../../customHooks/fetchData";

const PopularTvPage = (props) => {
  const [popularTv, fetch] = useFetchData();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York`,
      "get"
    );
  }, []);

  return popularTv ? (
    <ChildrenMovies title={"Popular Tv Show"} childrenMovies={popularTv} />
  ) : null;
};

export default PopularTvPage;
