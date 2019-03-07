import React, { Component } from 'react';
import './App.css';
import NavBar  from './components/navBar'
// import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
