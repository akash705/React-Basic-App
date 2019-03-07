import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {fromEvent, Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import RootRef from '@material-ui/core/RootRef';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import classes from './navbar.css';
import { connect } from 'react-redux';

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
        this.subscriber.pipe(switchMap(val=>this.finding('Aka',len++)))
        .subscribe((data,len)=>{
                    console.log('completed Observabledata');
                    console.log(data);
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
                setTimeout(data=>{
                    subscriber.next(
                        {done:this.props.posts.filter(data=>data.title.includes(str)),
                            length:len}
                    );
                    
                    subscriber.complete();
                },2000);
                
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
                    {/* <Button color="inherit" className="float-right" >Login</Button> */}
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
        posts:state.filteredData
    };
}
export default connect(mapsToProps,undefined)(navBar);