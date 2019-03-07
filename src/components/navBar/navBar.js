import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import classes from './navbar.css';

class navBar extends Component{
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
                    <InputBase className={classes.inputInput}
                        placeholder="Search…"/>
                </Toolbar>
            </AppBar>
        );
    }
}
export default navBar;