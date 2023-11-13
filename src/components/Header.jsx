import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="https://startbootstrap.com/">
      <h1>Start Bootstrap</h1>
      </a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Blog</li>
        <li>Portfolio</li>
      </ul>
    </div>
  );
};

export default Header;
