import React, {Component}  from 'react';
import classes from '../Posts.css';

export class singlePage extends Component{
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
    render(){
        return (
            <div className={classes.center}>
                    Single Page
            </div>
        )
    }
}
export default singlePage;