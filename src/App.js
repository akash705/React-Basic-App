import React, { Component } from 'react';
import './App.css';
import NavBar  from './components/navBar/navBar'
import axios from 'axios';
import {connect} from 'react-redux';
// import Button from '@material-ui/core/Button';
import Post from './components/Posts/Posts';
import { BrowserRouter,Route ,Router} from 'react-router-dom';
import SinglePostPage from './components/Posts/singlePage/singlePostPage';
import {withRouter} from 'react-router-dom';
class App extends Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
      this.getPost()
    }
  getPost=async ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(data=>{
      this.props.innerDispatch({type:'requestComplete',data:data.data});
    })  
  }
  render() {
    return (
      <div className="App">
          <NavBar routerConfig={this.props}></NavBar>
          <BrowserRouter>
            <div>
                <Route path="/" exact component={Post}></Route>
                <Route path="/Post/:id" exact component={SinglePostPage}></Route>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

var mapsToProps=(state)=>{
  return {
    origialData:state.originalData
  }
}
var dispatch = (dispatch)=>{
  return {
      innerDispatch :(data)=>dispatch(data)
  }
}

export default connect(mapsToProps,dispatch)(App);
