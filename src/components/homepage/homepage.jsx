import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./homepage.css";
import "mapbox-gl/dist/mapbox-gl.css";
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
      <div className="body">
        <div className="top">
          <h1>Long Beach</h1>
        </div>

        <div className="main">
          <div className="i1">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src="images/food.png" alt="" />
            <button className="btn-1">EXPLORE</button>
          </div>

          <div className="i2">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src="images/hotel.png" alt="" />
            <button className="btn-1">EXPLORE</button>
          </div>

          <div className="i3">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src="images/activity.png" alt="" />
            <button className="btn-1">EXPLORE</button>
          </div>
        </div>

        <div id="map" style={{ width: "95%", height: "400px" }}></div>
        {/* <div
          id="map"
          ref={this.mapContainer}
          className="map-container"
          style={{ width: "95%", height: "400px" }}
        /> */}

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default HomePage;
