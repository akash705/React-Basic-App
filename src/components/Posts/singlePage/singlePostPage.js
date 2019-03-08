import React, {Component}  from 'react';
import classes from '../Post/Post.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import lazyLoading from '../../../lazyLoadin';


export class singlePage extends Component{
    componentDidMount(){
        // console.log(this.props.match.params.id);
        // this.getById(this.props.match.params.id);
        // console.log(this.posts);
    }
    back=()=>{
        this.props.history.goBack()
    }
    
    
    render(){
        return (
            // <div className={classes.center}>
            //         {this.props.match.params.id+""}
            // </div>
            // this.props.posts.filter(data=>data.id===this.props.match.params.id)
            this.props.posts.filter(data=>{
                return data.id == this.props.match.params.id    
            }).map(data=>{
                return (
                    <div className={classes.marginTop} key={data.id}>
                        <Card className={classes.card}>
                        <Button onClick={this.back}>
                                Back
                        </Button>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {data.title}
                                </Typography>
                                <Typography component="p">
                                    {data.body}
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            })
        )
    }
}
var mapsToProps=(state)=>{
    return {
        posts:state.originalData
    }
}
export default connect(mapsToProps)(singlePage);