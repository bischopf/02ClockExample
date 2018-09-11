import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {changed:false}; 
    this.date = new Date(); 
  }

  componentDidMount() {
    this.timer=setInterval(() => this.tick(),1000);
  }
    
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick(){
    this.setState({ changed:true}); //setState...react knows that the state has changed
    this.date=new Date(); 
  }

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
