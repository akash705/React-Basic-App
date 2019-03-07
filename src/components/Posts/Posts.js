import React from 'react';
import SinglePost from './Post/singlePost';
import {connect} from 'react-redux'; 
import classes from './Posts.css';
class Post extends React.Component{
    render(){
        return (
                this.props.posts.length?this.props.posts.map(data=>{
                    return (
                    <SinglePost key={data.id} 
                        title={data.title}
                        id={data.id} 
                    >
                    </SinglePost>)
                }):(
                    <div className={classes.center}>
                        No Post Found 
                    </div>
                )
        )
    }
}
var mapsToProps=(state)=>{
    return {
        posts:state.filteredData
    }
}
export default connect(mapsToProps,null)(Post);