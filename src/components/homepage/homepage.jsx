import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./homepage.css";
import { Link } from "react-router-dom";
import HeroSection from "../heroSecHome/heroHome";
import Waves from "../waves/waves";
import "mapbox-gl/dist/mapbox-gl.css";
import hotel from "../../images/hotel.png";
import food from "../../images/food.png";
import sports from "../../images/activity.png";
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJpeWFkYXJzaGktYW1hbiIsImEiOiJja3B0bTdpNjYwM2RqMnFwYXBlcXh6OHhnIn0.AvnjsRrV6uWKX4IHTB5Z6A";

class HomePage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      lng: -118.19,
      lat: 33.77,
      zoom: 12,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    let map = new mapboxgl.Map({
      //   container: "map", // container ID
      container: "map",
      style: "mapbox://styles/priyadarshi-aman/ckptmoxcb0f4p17pe1rwvlzw1", // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });
  }
  render() {
    return (
      <>
        <HeroSection
          title="Welcome to Long Beach!"
          subtitle="explore Long Beach"
        />
        <div className="body">
          <div className="main">
            <div className="i1 item">
              <h2>Hotels</h2>
              <p>
                Stay at luxurious locations filled with happy vibes and great
                ambience.
              </p>

              <img src={hotel} alt="" />
              <Link to="/stay" style={{ textDecoration: "none" }}>
                <button className="btn-1">EXPLORE</button>
              </Link>
            </div>

            <div className="i2 item">
              <h2>Restaurants</h2>
              <p>
                Here is the list of the best fine dining restaurants in Long
                Beach.
              </p>

              <img src={food} alt="" />
              <Link to="/eat" style={{ textDecoration: "none" }}>
                <button className="btn-1">EXPLORE</button>
              </Link>
            </div>

            <div className="i3 item">
              <h2>Adventures</h2>
              <p>
                Here is a list of adventures sports you can attend at Long
                Beach!
              </p>

              <img src={sports} alt="" />
              <div className="btn-1">
                <Link to="/sports" style={{ textDecoration: "none" }}>
                  <button className="hpbutton">EXPLORE</button>
                </Link>
              </div>
            </div>
          </div>

          <div id="map" style={{ width: "95%", height: "400px" }}></div>
          <Waves />
        </div>
      </>
    );
  }
}

export default HomePage;
