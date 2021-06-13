import "./heroContact.css";
import React from "react";

const HeroSection = (props) => {
  return (
    <div className="hero-container21">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default HeroSection;
