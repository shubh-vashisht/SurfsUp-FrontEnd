import "./heroHome.css";
import React from "react";

const HeroSection = (props) => {
  return (
    <div className="hero-container10">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default HeroSection;
