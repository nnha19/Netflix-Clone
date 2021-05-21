import React, { useState } from "react";

import "./search.css";

import axios from "axios";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FetchData as useFetchData } from "../../../../customHooks/fetchData";
import { getResulsForSearch } from "../../../../store/slices/searchSlice";

let timer;

const Search = (props) => {
  const dispatch = useDispatch();

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
    timer = setTimeout(async () => {
      dispatch(getResulsForSearch(e.target.value));
      history.push(`/search/q=${e.target.value}`);
    }, 1000);
  };

  const hideSearchHandler = () => {
    setShowSearch(false);
  };

  return (
    <>
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
