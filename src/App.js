import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(function (res) {
        return res.json();
      })
      .then((data) => console.log(data));
  }
  render() {
    return <h1>People</h1>;
  }
}

export default App;
