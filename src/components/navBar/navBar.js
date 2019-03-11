import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {fromEvent, Observable } from 'rxjs';
import { switchMap, throttleTime, debounceTime} from 'rxjs/operators';
import RootRef from '@material-ui/core/RootRef';

import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import classes from './navbar.css';
import { connect } from 'react-redux';
import { withRouter ,Route} from 'react-router-dom'
import {compose} from 'react';

class navBar extends Component{
    state={
        value:''
    }
    subscription=undefined;
    constructor(props){
        super(props);
        this.inputText = React.createRef();
    }
    componentDidMount(){
        let len=0;
        this.subscriber  = fromEvent(this.inputText.current,'input');
        this.subscriber.pipe(debounceTime(500),switchMap(val=>this.finding(this.state.value,len++)))
        .subscribe((data,len)=>{
                    this.props.dispatch({type:'filter',data:data});
        },()=>{},(complete)=>{
        })
    } 
    change=(event)=>{
        this.setState({value:event.target.value});
    }  
    componentWillUnmount(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }
    finding(str,len){
        return new Observable((subscriber)=>{
                    subscriber.next(
                        this.props.originalData.filter(data=>data.title.includes(str))
                    );
                    subscriber.complete();
        })
    }
    
    render(){

        return(
            <AppBar color="primary">
                 <Toolbar>
                    {/* <IconButton  color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" color="inherit" >
                        GitHub
                    </Typography>
                    
                    <Button color="inherit" className="float-right" >
                        <a href="https://fir-search-post.firebaseapp.com/" className={classes.link} target="_">
                        Angular Version
                        </a>
                    </Button>
                    {/* https://fir-search-post.firebaseapp.com/ */}
                        <RootRef rootRef={this.inputText}>
                                <InputBase className={classes.inputInput}
                                placeholder="Search…" onChange={this.change}   value={this.state.value}
                                ref={this.inputText}
                                />
                        </RootRef>
                </Toolbar>
            </AppBar>
        );
    }
}
var mapsToProps=(state)=>{
    return {
        posts:state.filteredData,
        originalData:state.originalData
    };
}
var dispatcher=(dispatch)=>{
    return {
        dispatch:(data)=>dispatch(data)
    }
}
export default withRouter(connect(mapsToProps,dispatcher)(navBar));