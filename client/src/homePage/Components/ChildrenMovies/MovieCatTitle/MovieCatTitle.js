import React from "react";

import { useHistory } from "react-router-dom";

const MovieCatTitle = (props) => {
  const history = useHistory();

  const showMoviesHandler = () => {
    !props.detail && history.push(`browse/${props.component}`);
  };
  const detailTitleStyle = props.detail ? { textAlign: "center" } : null;

  return (
    <h3
      style={detailTitleStyle}
      className={`props.detail`}
      onClick={showMoviesHandler}
      className={props.className}
    >
      {props.title}
    </h3>
  );
};

export default MovieCatTitle;
