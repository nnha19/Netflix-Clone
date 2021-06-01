import React, { useState, useEffect } from "react";

import DeskTop from "./deskTop/deskTop";

import "./navbar.css";

const NavBar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  });
  return (
    <ul className={`nav-bar ${isScrolled ? "nav-bar__fixed" : ""}`}>
      <DeskTop />
    </ul>
  );
};

export default NavBar;
