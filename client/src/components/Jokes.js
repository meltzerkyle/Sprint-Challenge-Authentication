import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    console.log(token);
    const reqOptions = {
      headers: {
        authorization: token
      }
    };
    axios
      .get("http://localhost:3300/api/jokes", reqOptions)
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    return (
      <div style={{ marginTop: 30 + "px" }}>
        <h1>JOKES PAGE</h1>
        <ul />
        {this.state.jokes.map(joke => (
          <li key={joke.id}>
            THIS IS A {joke.type} JOKE <br/>
            {joke.setup} <br/>  
            {joke.punchline}
          </li>
        ))}
      </div>
    );
  }
}

export default Jokes;
