import React, { useState } from "react";

import ViewDetailIcon from "./ViewDetailIcon/ViewDetalIcon";
import PlayButton from "../../../../../share/UI/playButton/playButton";
import ShowTag from "../ShowTag/ShowTag";
import AddToList from "./AddToList/AddToList";

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
        {props.detailPage ? (
          <PlayButton>Play</PlayButton>
        ) : (
          <i
            onMouseEnter={() => showTagHandler("video", true)}
            onMouseLeave={() => showTagHandler("video")}
            className="movie-category__icon fas fa-play"
          >
            <ShowTag className="show-tag" show={showTag["video"]}>
              Watch Video
            </ShowTag>
          </i>
        )}
        <AddToList
          movie={props.movie}
          show={showTag["addToList"]}
          showTagHandler={(tagName, type) => showTagHandler(tagName, type)}
        />
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
      {!props.detailPage && (
        <div className="movie-category__right">
          <ViewDetailIcon
            movie={props.movie}
            showTagHandler={(tagName, type) => showTagHandler(tagName, type)}
            className="movie-category__icon fas fa-angle-down"
            showTag={showTag}
            viewDetail={(movie) => props.viewDetail(movie)}
          />
        </div>
      )}
    </>
  );
};

export default IconWithTag;
