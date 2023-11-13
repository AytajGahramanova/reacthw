import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="left">
        <h1>A Bootstrap 5 template for modern businesses</h1>
        <p>
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit!
        </p>
        <button className="btn btn-primary">Get Started</button>
        <button type="button" className="btn btn-outline-secondary">
          Learn More
        </button>
      </div>
      <div className="right">
        <div className="image">
          <img
            src="https://plus.unsplash.com/premium_photo-1698052604724-65a463d35ab5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
