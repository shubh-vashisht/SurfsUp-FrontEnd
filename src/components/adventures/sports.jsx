import React, { Component } from "react";
import axios from "axios";
import "./sports.css";
import Waves from "../waves/waves";
import HeroSection from "../heroSecAdv/heroAdv";
import img from "../../images/activity2.png";
class Sports extends Component {
  state = { sports: [] };
  async componentDidMount() {
    const { data: sports } = await axios.get("http://localhost:4000/sports/");
    this.setState({ sports });
    window.scrollTo(0, 0);
  }

  render() {
    const sports = this.state.sports;
    return (
      <div>
        <HeroSection
          title="Adventures"
          subtitle="Explore adventure sports at Long Beach!"
        />

        <div class="sportmain">
          {sports.map((sport) => {
            return (
              <div id="sportitem" class="sporti1">
                <h2>{sport.title}</h2>
                <h5>{sport.location}</h5>
                <h2>Coach:</h2>
                <h5>{sport.coach}</h5>
                <img src={img} alt="" />
                <button class="sportbtn-1">EXPLORE</button>
              </div>
            );
          })}
        </div>
        <Waves />
      </div>
    );
  }
}

export default Sports;
