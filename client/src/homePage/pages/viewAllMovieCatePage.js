import React from "react";

import { useParams } from "react-router-dom";

const ViewAllMovieCatePage = () => {
  const { movieCategory } = useParams();

  return (
    <>
      <h3 className="primary-heading">{movieCategory}</h3>
    </>
  );
};

export default ViewAllMovieCatePage;
