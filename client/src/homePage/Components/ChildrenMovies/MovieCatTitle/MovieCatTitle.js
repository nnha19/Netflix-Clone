import React from "react";

import { useHistory } from "react-router-dom";

const MovieCatTitle = (props) => {
  const history = useHistory();

  const showMoviesHandler = () => {
    console.log("Hello");
    history.push(`browse/${props.title}`);
  };

  return (
    <h3
      className={props.className}
      onClick={showMoviesHandler}
      className={props.className}
    >
      {props.title}
    </h3>
  );
};

export default MovieCatTitle;
