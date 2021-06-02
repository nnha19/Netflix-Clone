import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import moviesSlice, {
  getAllMovies,
  moviesSliceActions,
} from "../../store/slices/moviesSlice";

import HomePageDisplayPage from "./homePageDisplayPage";
import ChildrenMoviesPage from "./childrenMoviesPage";
import PopularMoviesPage from "./popularMoviesPage";
import PopularTvPage from "./popularTvPage";
import FamilyMoviePage from "./familyMoviesPage";

const HomePage = (props) => {
  const moviesArr = [
    {
      title: "Children Movies",
      url: (pageNum) => {
        return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&include_video=false&page=${pageNum}&with_genres=16`;
      },
      count: 3,
    },
    {
      title: "Popular Movies",
      url: (pageNum) =>
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}&with_watch_monetization_types=flatrate`,
      count: 4,
    },
    {
      title: "Popular Tv",
      url: (pageNum) =>
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}&timezone=America%2FNew_York`,
      count: 6,
    },
    {
      title: "Comedy",
      url: (pageNum) =>
        `https://api.themoviedb.org/3/discover/movie?api_key=a31d02795054ebca84e5c9d45e915e85&language=en-US&include_adult=false&include_video=false&page=${pageNum}&with_genres=35`,
      count: 3,
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies(moviesArr));
  }, []);

  return (
    <>
      <HomePageDisplayPage />
      <ChildrenMoviesPage />
      <PopularMoviesPage />
      <PopularTvPage />
      <FamilyMoviePage />
    </>
  );
};

export default HomePage;
