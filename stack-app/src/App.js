import React, { Component } from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Navbars from "./Navbars";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
