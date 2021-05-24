import React, { useState } from "react";
import "./deskTop.css";

import { useHistory } from "react-router-dom";

import Search from "../search/search";

const DeskTop = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const history = useHistory();

  const navigatePageHandler = (url) => {
    history.push(url);
    setSearchVal("");
  };

  return (
    <div className="desktop">
      <div className="desktop__left">
        <div onClick={() => navigatePageHandler("/")} className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
            className="logo__img"
          />
        </div>
        <li className="nav-bar__item nav-bar__hover">Home</li>
        <li className="nav-bar__item nav-bar__hover">TV Shows</li>
        <li className="nav-bar__item nav-bar__hover">Movies</li>
        <li className="nav-bar__item nav-bar__hover">Latest</li>
        <li className="nav-bar__item nav-bar__hover">My List</li>
      </div>
      <div className="desktop__right">
        <Search searchVal={searchVal} setSearchVal={setSearchVal} />
        <i className="nav-bar__icon fas fa-bell nav-bar__item"></i>
        <i className="nav-bar__item">Profile</i>
      </div>
    </div>
  );
};

export default DeskTop;
