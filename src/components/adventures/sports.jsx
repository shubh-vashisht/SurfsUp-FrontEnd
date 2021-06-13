import React, { Component } from "react";
import axios from "axios";
class Sports extends Component {
  state = { sports: [] };
  async componentDidMount() {
    const { data: sports } = await axios.get("http://localhost:4000/sports/");
    this.setState({ sports });
    console.log(this.state.sports);
  }

  render() {
    return <h1>yoyyooy</h1>;
  }
}

export default Sports;
