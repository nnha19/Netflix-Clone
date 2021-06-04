import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/slices/getMoviesSlice";

import ChildrenMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const TvShowPage = () => {
  const tvShows = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovies({
        url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
        pageCount: 7,
      })
    );
  }, []);
  console.log(!!tvShows);
  return tvShows && tvShows.length > 0 ? (
    <ChildrenMovies childrenMovies={tvShows} />
  ) : null;
};

export default TvShowPage;
