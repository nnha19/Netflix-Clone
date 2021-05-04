import React, { useState } from "react";

import "./ShowDetailWhenHover.css";

import ShowTag from "./ShowTag/ShowTag";

const ShowDetailWhenHover = (props) => {
  const movieTitle = props.movie.title || props.movie.name;

  const [showTag, setShowTag] = useState({
    video: false,
    addToList: false,
    like: false,
    disLike: false,
    viewDetail: false,
  });

  const shortenTitleLength = (title) => {
    if (title.length > 20) {
      const shortenTitle = title.substr(0, 20) + "...";
      return shortenTitle;
    } else {
      return title;
    }
  };

  const showTagHandler = (tagName) => {
    const cloned = { ...showTag, [tagName]: !showTag[tagName] };
    setShowTag(cloned);
  };

  return (
    <div className="movie-category__body">
      <div className="movie-category__icons">
        <div className="movie-category__left">
          <i
            onMouseEnter={() => showTagHandler("video")}
            onMouseLeave={() => showTagHandler("video")}
            className="movie-category__icon fas fa-play"
          >
            <ShowTag className="show-tag" show={showTag["video"]}>
              Watch Video
            </ShowTag>
          </i>
          <i
            onMouseEnter={() => showTagHandler("addToList")}
            onMouseLeave={() => showTagHandler("addToList")}
            className="movie-category__icon fas fa-plus"
          >
            <ShowTag className="show-tag" show={showTag["addToList"]}>
              Add To List
            </ShowTag>
          </i>
          <i
            onMouseEnter={() => showTagHandler("like")}
            onMouseLeave={() => showTagHandler("like")}
            className="movie-category__icon far fa-thumbs-up"
          >
            <ShowTag className="show-tag" show={showTag["like"]}>
              I Like This
            </ShowTag>
          </i>
          <i
            onMouseEnter={() => showTagHandler("disLike")}
            onMouseLeave={() => showTagHandler("disLike")}
            className="movie-category__icon fas fa-thumbs-down"
          >
            <ShowTag className="show-tag" show={showTag["disLike"]}>
              Not For Me
            </ShowTag>
          </i>
        </div>
        <div className="movie-category__right">
          <i
            onMouseEnter={() => showTagHandler("viewDetail")}
            onMouseLeave={() => showTagHandler("viewDetail")}
            className="movie-category__icon fas fa-angle-down"
          >
            <ShowTag className="show-tag" show={showTag["viewDetail"]}>
              View Detail
            </ShowTag>
          </i>
        </div>
      </div>
      <h4 className="primary-heading center">
        {shortenTitleLength(movieTitle)}
      </h4>
    </div>
  );
};

export default ShowDetailWhenHover;
