import React, { Component } from 'react';
import './App.css';
import NavBar  from './components/navBar/navBar'
import axios from 'axios';
import {connect} from 'react-redux';
// import Button from '@material-ui/core/Button';

class App extends Component {
  componentDidMount(){
      this.getPost()
  }
  async getPost(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(data=>{
    })  
  }
  render() {
    return (
      <div className="App">
          <NavBar></NavBar>
      </div>
    );
  }
}

var mapsToProps=(state)=>{
  return {
    origialData:state.data
  }
}
var dispatch = (dispatch)=>{
  return {
      innerDispatch :(data)=>dispatch({value:data})
  }
}

export default connect(mapsToProps,null)(App);
