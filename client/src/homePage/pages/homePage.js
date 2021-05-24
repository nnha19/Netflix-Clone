import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getAllMovies } from "../../store/slices/moviesSlice";

import HomePageDisplayPage from "./homePageDisplayPage";
import ChildrenMoviesPage from "./childrenMoviesPage";
import PopularMoviesPage from "./popularMoviesPage";
import PopularTvPage from "./popularTvPage";

const HomePage = (props) => {
  const moviesArr = [
    {
      title: "Children Movies",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=1`,
    },
    {
      title: "Popular Movies",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=97&with_watch_monetization_types=flatrate`,
    },
    {
      title: "Popular Tv",
      url: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York`,
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
    </>
  );
};

export default HomePage;
