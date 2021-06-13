import React, { Component } from "react";
import HeroSection from "../heroContact/heroContact";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeroSection
          title="Contact Us"
          subtitle="We would love to pickup your call!"
          contact="+91 8700428115 , +91 98104 60599"
          email="Email: longbeach@gmail.com"
        />
      </div>
    );
  }
}

export default Contact;
