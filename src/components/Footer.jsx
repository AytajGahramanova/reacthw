import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>Copyright © Your Website 2023</p>
      </div>
      <div className="right">
        <ul>
          <a href="https://startbootstrap.com/previews/modern-business">
            <li>Privacy</li>
          </a>
          <a href="https://startbootstrap.com/previews/modern-business">
            <li>Terms</li>
          </a>
          <a href="https://startbootstrap.com/previews/modern-business">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
