import React from 'react';
import SinglePost from './Post/singlePost';
class Post extends React.Component{
    render(){
        return (
            [1,2,3].map(data=>{
                return <SinglePost></SinglePost>
            })
        )
    }
}
export default Post;