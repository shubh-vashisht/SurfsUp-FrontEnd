import "./heroHome.css";
import React from "react";
import vid from "../../images/beach.mp4";
const HeroSection = (props) => {
  return (
    <div className="hero-container10">
      {/* <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video> */}
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default HeroSection;
