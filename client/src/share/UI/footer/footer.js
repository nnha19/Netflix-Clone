import React from "react";

import "./footer.css";

import SocialLinks from "./socialLinks/socialLinks";

const Footer = (props) => {
  return (
    <footer className="footer">
      <SocialLinks />
      <ul className="footer-list">
        <div>
          <li className="footer-list__items">
            <a href="#">Audio and Subtitles</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Help Center</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Media Center</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Jobs</a>
          </li>
        </div>
        <div>
          <li className="footer-list__items">
            <a href="#">Privacy</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Cookie Preferences</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Contact Us</a>
          </li>
        </div>
        <div>
          <li className="footer-list__items">
            <a href="#">Audio Description</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Gift Cards</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Investor Relations</a>
          </li>
        </div>
        <div>
          <li className="footer-list__items">
            <a href="#">Terms Of Use</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Legal Notices</a>
          </li>
          <li className="footer-list__items">
            <a href="#">Corperate Operation</a>
          </li>
        </div>
      </ul>
      <button className="footer-btn">Service Code</button>
      <span className="copyright">
        © 1997-2021 Netflix, Inc. 977da29c-402f-4fd9-9507-c9d34dd317f4
      </span>
    </footer>
  );
};

export default Footer;
