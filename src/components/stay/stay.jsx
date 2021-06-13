import React, { Component } from "react";
import axios from "axios";
import HeroSection from "../heroSecStay/heroStay";
import Waves from "../waves/waves";
import icons from "glyphicons";
import "./stay.css";
import img from "../../images/hotel.png";
class Hotels extends Component {
  state = { hotels: [] };
  async componentDidMount() {
    const { data: hotels } = await axios.get("http://localhost:4000/stay/");
    this.setState({ hotels });
    console.log(this.state.hotels);
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
          subtitle="Best places in long beach to straigthen your back"
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
