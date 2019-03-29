import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Container from "./Container";
import Chuck from "./Chuck";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chuck />
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
