import React, { useEffect, useState } from "react";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";
import { FetchData as useFetchData } from "../../customHooks/fetchData";

const PopularTvPage = (props) => {
  const [popularTv, fetch] = useFetchData();
  const title = "Popular Tv Shows";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York`,
      "get"
    );
  }, []);

  useEffect(() => {
    popularTv &&
      popularTv.length > 0 &&
      props.setAllMovie({ [title]: popularTv });
  }, [popularTv]);

  return popularTv ? (
    <ChildrenMovies title={title} childrenMovies={popularTv} />
  ) : null;
};

export default PopularTvPage;
