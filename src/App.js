import React, { Component } from 'react'
import './App.css';
import Header from './Header'
import Subtitle from './Subtitle'
import Container from './Container'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Subtitle/>
         <Container/>
      </div>
    );
  }
}

export default App;
