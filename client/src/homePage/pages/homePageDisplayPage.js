import React, { useState, useEffect } from "react";

import axios from "axios";

import HomePageDisplay from "../Components/HomePageDisplay/HomePageDisplay";

const HomePageDisplayPage = (props) => {
  const [displayMovie, setDisplayMovie] = useState(null);

  useEffect(() => {
    (async () => {
      let rn;
      const result = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = result.data.results;

      const date = JSON.parse(localStorage.getItem("date"));
      const randomNumber = JSON.parse(localStorage.getItem("rn"));

      if (date === new Date().getDate()) {
        rn = randomNumber;
      } else {
        rn = Math.floor(Math.random() * data.length);
        localStorage.setItem("date", JSON.stringify(new Date().getDate()));
        localStorage.setItem("rn", rn);
      }

      const movie = data[rn];
      setDisplayMovie(movie);
    })();
  }, []);

  return (
    <>
      <HomePageDisplay displayMovie={displayMovie} />
    </>
  );
};
export default HomePageDisplayPage;
