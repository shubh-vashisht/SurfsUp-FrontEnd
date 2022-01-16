import React, { Component } from "react";
import axios from "axios";
import HeroSection from "../heroSecStay/heroStay";
import Waves from "../waves/waves";
import icons from "glyphicons";
import "./stay.css";
import img from "../../images/hotel.png";
require("dotenv").config();
class Hotels extends Component {
  state = { hotels: [] };
  baseUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";
  async componentDidMount() {
    window.scrollTo(0, 0);
    const { data: hotels } = await axios.get(`${this.baseUrl}/stay/`);
    this.setState({ hotels });
  }

  renderStars(num) {
    let ans = [];
    for (let i = 0; i < num; ++i) {
      ans.push(1);
    }
    return ans;
  }

  render() {
    const hotels = this.state.hotels;
    return (
      <div>
        <HeroSection
          title="Hotels"
          subtitle="Best places in long beach to straighten your back"
        />

        <div class="staymain">
          {hotels.map((hotel) => {
            return (
              <div id="stayitem" class="stayi1">
                <h2>{hotel.name}</h2>
                <p>{hotel.location}</p>
                <br></br>
                <h3>Cost Per Night:</h3>
                <p>{hotel.costPerNight}$</p>
                <img src={img} alt="" />
                <div class="rating">
                  {this.renderStars(hotel.stars).map(() => {
                    return <i class="glyphicon glyphicon-star">{icons.star}</i>;
                  })}
                </div>
                <button class="btn-1">EXPLORE</button>
              </div>
            );
          })}
        </div>
        <Waves />
      </div>
    );
  }
}

export default Hotels;
