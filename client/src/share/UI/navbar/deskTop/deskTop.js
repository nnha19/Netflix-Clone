import React from "react";
import "./deskTop.css";

import { Link } from "react-router-dom";

import Search from "../search/search";

const DeskTop = (props) => {
  return (
    <div className="desktop">
      <div className="desktop__left">
        <div className="logo">
          <Link to="/netflix/browse">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
              className="logo__img"
            />
          </Link>
        </div>
        <li className="nav-bar__item nav-bar__hover">Home</li>
        <li className="nav-bar__item nav-bar__hover">TV Shows</li>
        <li className="nav-bar__item nav-bar__hover">Movies</li>
        <li className="nav-bar__item nav-bar__hover">Latest</li>
        <li className="nav-bar__item nav-bar__hover">My List</li>
      </div>
      <div className="desktop__right">
        <Search />
        <i className="nav-bar__icon fas fa-bell nav-bar__item"></i>
        <i className="nav-bar__item">Profile</i>
      </div>
    </div>
  );
};

export default DeskTop;
