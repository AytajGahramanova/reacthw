import React from "react";
import "./Card.css";

const Card = ({ titleColor, title, bgImg}) => {
  return (
    <div className="card" style={{border: "none", margin: "10px"}}>
      <div className="card-img" style={{marginLeft: "20px"}}>
        <img src={bgImg} alt="" width="50px" height="50px"/>
      </div>

      <div className="card-body">
        <h5 style={{ color: title }}>Featured title</h5>
        <p style={{ color: titleColor, maxWidth: "500px" }}>
          Paragraph of text beneath the heading to explain the heading. Here is
          just a bit more text.
        </p>
      </div>
    </div>
  );
};

export default Card;
