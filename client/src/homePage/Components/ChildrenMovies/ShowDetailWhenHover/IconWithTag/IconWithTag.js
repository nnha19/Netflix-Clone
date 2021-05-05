import React, { useState } from "react";

import ViewDetailIcon from "./ViewDetailIcon/ViewDetalIcon";

import ShowTag from "../ShowTag/ShowTag";

const IconWithTag = (props) => {
  const showTagHandler = (tagName, type) => {
    const cloned = { ...showTag };
    for (let key in cloned) {
      cloned[key] = false;
    }
    cloned[tagName] = type ? true : false;
    setShowTag(cloned);
  };

  const [showTag, setShowTag] = useState({
    video: false,
    addToList: false,
    like: false,
    disLike: false,
    viewDetail: false,
  });

  return (
    <>
      <div className="movie-category__left">
        <i
          onMouseEnter={() => showTagHandler("video", true)}
          onMouseLeave={() => showTagHandler("video")}
          className="movie-category__icon fas fa-play"
        >
          <ShowTag className="show-tag" show={showTag["video"]}>
            Watch Video
          </ShowTag>
        </i>
        <i
          onMouseEnter={() => showTagHandler("addToList", true)}
          onMouseLeave={() => showTagHandler("addToList")}
          className="movie-category__icon fas fa-plus"
        >
          <ShowTag className="show-tag" show={showTag["addToList"]}>
            Add To List
          </ShowTag>
        </i>
        <i
          onMouseEnter={() => showTagHandler("like", true)}
          onMouseLeave={() => showTagHandler("like")}
          className="movie-category__icon far fa-thumbs-up"
        >
          <ShowTag className="show-tag" show={showTag["like"]}>
            I Like This
          </ShowTag>
        </i>
        <i
          onMouseEnter={() => showTagHandler("disLike", true)}
          onMouseLeave={() => showTagHandler("disLike")}
          className="movie-category__icon fas fa-thumbs-down"
        >
          <ShowTag className="show-tag" show={showTag["disLike"]}>
            Not For Me
          </ShowTag>
        </i>
      </div>
      <div className="movie-category__right">
        <ViewDetailIcon
          movie={props.movie}
          showTagHandler={(tagName, type) => showTagHandler(tagName, type)}
          className="movie-category__icon fas fa-angle-down"
          showTag={showTag}
          viewDetail={(movie) => props.viewDetail(movie)}
        />
      </div>
    </>
  );
};

export default IconWithTag;
