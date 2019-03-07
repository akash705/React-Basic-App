import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {fromEvent} from 'rxjs';
import RootRef from '@material-ui/core/RootRef';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import classes from './navbar.css';

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
        this.subscription = fromEvent(this.inputText.current,'input').subscribe(data=>{   
            this.setState({value:data.target.value});
        })
    }   
    componentWillUnmount(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
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
                                placeholder="Search…"   value={this.state.value}
                                ref={this.inputText}
                                />
                        </RootRef>
                </Toolbar>
            </AppBar>
        );
    }
}
export default navBar;