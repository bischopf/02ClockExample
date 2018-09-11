import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div class="alert alert-info" role="alert">
        <h2>Current Time: {this.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
