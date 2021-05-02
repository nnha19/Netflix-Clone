import React, { useState } from "react";

import "./search.css";

import { useHistory } from "react-router-dom";

import { FetchData as useFetchData } from "../../../../customHooks/fetchData";

let timer;

const Search = (props) => {
  const history = useHistory();
  const [searchResult, fetchData] = useFetchData("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const clickedSearchHandler = () => {
    setShowSearch(true);
  };

  const valChangeHandler = (e) => {
    setSearchVal(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fetchData(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`,
        "get"
      );
      history.push(`/search/q=${e.target.value}`);
    }, 1000);
  };

  const hideSearchHandler = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div
        onClick={hideSearchHandler}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          right: "0",
          zIndex: "-1",
        }}
      ></div>
      <form className="search nav-bar__icon">
        <i
          onClick={clickedSearchHandler}
          className={`${
            showSearch ? "move-right" : ""
          } search-icon fas fa-search nav-bar__item`}
        ></i>
        <input
          value={searchVal}
          onChange={valChangeHandler}
          className={`search__input ${showSearch ? "show-search" : ""}`}
          type="text"
          placeholder="Search Movies"
        />
      </form>
    </>
  );
};

export default Search;
