"use stict";

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount() called");
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentDidUnmount() called");
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="alert alert-info" role="alert">
        <h2>Current Time: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
