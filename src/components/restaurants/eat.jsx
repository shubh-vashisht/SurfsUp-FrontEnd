import React, { Component } from "react";
import axios from "axios";
import "./eat.css";

class Restaurants extends Component {
  state = { posts: [] };
  async componentDidMount() {
    const { data: posts } = await axios.get("http://localhost:4000/eat/");
    this.setState({ posts });
    console.log(this.state.posts);
  }
  render() {
    return (
      <div className="eatBody">
        <div className="eattop">
          <h1>Restaurants</h1>
          <h2>Long Beach</h2>
        </div>

        <div className="eatmain">
          <div id="item" className="i1">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src="../../images/food.png" alt="" />
            <div className="rating">
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star half"></i>
            </div>
            <button className="btn-1">EXPLORE</button>
          </div>

          <div id="item" className="i2">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src="../../images/food.png" alt="" />
            <div className="rating">
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star half"></i>
            </div>
            <button className="btn-1">EXPLORE</button>
          </div>

          <div id="item" className="i3">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src="../../images/food.png" alt="" />
            <div className="rating">
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star half"></i>
            </div>
            <button className="btn-1">EXPLORE</button>
          </div>

          <div id="item" className="i4">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src="../../images/food.png" alt="" />
            <div className="rating">
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star half"></i>
            </div>
            <button className="btn-1">EXPLORE</button>
          </div>

          <div id="item" className="i5">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src="../../images/food.png" alt="" />
            <div className="rating">
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star half"></i>
            </div>
            <button className="btn-1">EXPLORE</button>
          </div>

          <div id="item" className="i6">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <img src="../../images/food.png" alt="" />
            <div className="rating">
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star"></i>
              <i className="glyphicon glyphicon-star half"></i>
            </div>
            <button className="btn-1">EXPLORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
