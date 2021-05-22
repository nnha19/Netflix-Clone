import React, { useState } from "react";

import "./search.css";

import axios from "axios";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import { searchToggleSliceActions } from "../../../../store/slices/searchToggle";

import { getResulsForSearch } from "../../../../store/slices/searchSlice";

let timer;

const Search = (props) => {
  const showSearch = useSelector((state) => state.searchToggle.showSearch);
  const dispatch = useDispatch();

  const history = useHistory();
  const [searchVal, setSearchVal] = useState("");

  const clickedSearchHandler = () => {
    dispatch(searchToggleSliceActions.showSearch());
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

  return (
    <>
      <form id="nav-bar__search" className="search nav-bar__icon">
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
