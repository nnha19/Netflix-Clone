import React from "react";

import "./playButton.css";

const PlayButton = (props) => {
  return (
    <button
      style={props.style}
      className={`play-button netflix-btn ${props.className}`}
    >
      <i class="fas fa-play"></i>
      {props.children}
    </button>
  );
};

export default PlayButton;
