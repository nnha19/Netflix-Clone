import React from "react";

import { useParams } from "react-router-dom";

const ViewAllMovieCatePage = () => {
  const { movieCategory } = useParams();
  console.log(movieCategory);
  return (
    <>
      <h3>{movieCategory}</h3>
    </>
  );
};

export default ViewAllMovieCatePage;
