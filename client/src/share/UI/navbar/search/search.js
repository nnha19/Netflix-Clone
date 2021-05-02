import React, { useState } from "react";

import "./search.css";

const Search = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const clickedSearchHandler = () => {
    setShowSearch(true);
  };

  return (
    <form className="search nav-bar__icon">
      <i
        onClick={clickedSearchHandler}
        className={`${
          showSearch ? "move-right" : ""
        } search-icon fas fa-search nav-bar__item`}
      ></i>
      <input
        className={`search__input ${showSearch ? "show-search" : ""}`}
        type="text"
        placeholder="Search Movies"
      />
    </form>
  );
};

export default Search;
