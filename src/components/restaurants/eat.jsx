import React, { Component } from "react";
import axios from "axios";
import "./eat.css";
import HeroSection from "../heroSecEat/heroEat";
import icons from "glyphicons";
import Waves from "../waves/waves";
import a from "../../images/food.png";
class Restaurants extends Component {
  state = { posts: [] };
  baseUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";
  async componentDidMount() {
    window.scrollTo(0, 0);
    try {
      const { data: posts } = await axios.get(`${this.baseUrl}/eat/`);
      this.setState({ posts });
    } catch (err) {
      console.log(err);
    }
  }
  renderStars(num) {
    let ans = [];
    for (let i = 0; i < num; ++i) {
      ans.push(1);
    }
    return ans;
  }
  render() {
    const posts = this.state.posts;
    return (
      <div className="eatBody">
        <HeroSection title="Restaurants" subtitle="Fine Dining in Long Beach" />

        <div className="eatmain">
          {posts.map((element) => {
            return (
              <div key={element._id} id="eatitem" className="eati1">
                <h2>{element.name}</h2>
                <p>{element.location}</p>
                <h3>Cuisines</h3>
                <p>{element.cuisine}</p>
                <h3>Cost for Two:</h3>
                <p>{element.costfortwo}$</p>
                <img src={a} alt="" />
                <div className="rating">
                  {this.renderStars(element.rating).map(() => {
                    return (
                      <i className="glyphicon glyphicon-star">{icons.star}</i>
                    );
                  })}
                </div>
                <button className="btn-1">EXPLORE</button>
              </div>
            );
          })}
        </div>
        <Waves />
      </div>
    );
  }
}

export default Restaurants;
