import React from "react";

import "./HomePageDisplay.css";

import PlayButton from "../../../share/UI/playButton/playButton";
import MoreInfoBtn from "../../../share/UI/moreInfoBtn/moreInfoBtn";

const HomePageDisplay = (props) => {
  const displayMovie = props.displayMovie;

  return displayMovie ? (
    <div className="display-movie">
      <div className="container">
        <img
          className="display-movie__poster"
          src={`https://image.tmdb.org/t/p/w500/${displayMovie.poster_path}`}
        />
        <div className="display-movie__content">
          <h3 className="primary-heading">
            {displayMovie.title || displayMovie.name}
          </h3>
          <p className="netflix-text">{displayMovie.overview}</p>
          <div className="display-movie__btns">
            <PlayButton>Play</PlayButton>
            <MoreInfoBtn>More Info</MoreInfoBtn>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default HomePageDisplay;
