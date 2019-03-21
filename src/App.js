import React, { Component } from 'react'
import './App.css';
import Header from './Header'
import Subtitle from './Subtitle'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Subtitle/>
         <Form/>
      </div>
    );
  }
}

export default App;
