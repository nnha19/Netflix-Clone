import React, { useState } from "react";

import "./HomePageDisplay.css";

import PlayButton from "../../../share/UI/playButton/playButton";
import MoreInfoBtn from "../../../share/UI/moreInfoBtn/moreInfoBtn";
import ViewDetail from "../../../homePage/Components/ChildrenMovies/ViewDetail/ViewDetail";

const HomePageDisplay = (props) => {
  const [viewDetail, setViewDetail] = useState(false);

  const hideViewDetailHandler = () => {
    setViewDetail(false);
  };
  const viewDetailHandler = () => {
    setViewDetail(true);
  };

  const displayMovie = props.displayMovie;

  return displayMovie ? (
    <>
      {viewDetail && (
        <ViewDetail
          hideViewDetail={hideViewDetailHandler}
          movie={displayMovie}
        />
      )}
      <div className="display-movie">
        <div className="container">
          <img
            className="display-movie__img"
            src={`https://image.tmdb.org/t/p/w1280/${displayMovie.poster_path}`}
          />
          <div className="display-movie__content">
            <h3 className="primary-heading">
              {displayMovie.title || displayMovie.name}
            </h3>
            <p className="netflix-text">{displayMovie.overview}</p>
            <div className="display-movie__btns">
              <PlayButton>Play</PlayButton>
              <MoreInfoBtn clicked={viewDetailHandler}>More Info</MoreInfoBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default HomePageDisplay;
