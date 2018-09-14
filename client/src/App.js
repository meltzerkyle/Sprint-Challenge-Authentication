import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false
    };
  }

  logOut = event => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
        <Link to="/login">
          <button>Login page</button>{" "}
        </Link>
        <Link to="/register">
          <button>Register page</button>{" "}
        </Link>
        <Link to="/jokes">
          <button>Jokes</button>{" "}
        </Link>
        <button onClick={this.logOut}>Log out</button>
        <h1>PLEASE CHOOSE AN OPTION ABOVE</h1>
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/jokes" render={props => <Jokes {...props} />} />
      </div>
    );
  }
}

export default withRouter(App);
