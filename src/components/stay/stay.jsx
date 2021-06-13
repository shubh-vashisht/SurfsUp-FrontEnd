import React, { Component } from "react";
import axios from "axios";
class Hotels extends Component {
  state = { hotels: [] };
  async componentDidMount() {
    const { data: hotels } = await axios.get("http://localhost:4000/stay/");
    this.setState({ hotels });
    console.log(this.state.hotels);
  }

  render() {
    return <h1>yoyyooy</h1>;
  }
}

export default Hotels;
