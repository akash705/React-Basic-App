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
import action from  './store/actionCreator/actions';
import lazyLoading from './lazyLoadin';

var asyncLazyLoading = lazyLoading(()=>{
  return import ('./components/Posts/singlePage/singlePostPage');
})

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
      this.props.innerDispatch(data.data);
    })  
  }
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
                {/* <NavBar routerConfig={this.props}></NavBar> */}
                <Route path="/" component={NavBar}></Route>
                <Route path="/" exact component={Post}></Route>
                <Route path="/Post/:id" exact component={asyncLazyLoading}></Route>
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
      innerDispatch :(data)=>dispatch(action(data))
  }
}

export default connect(mapsToProps,dispatch)(App);
