import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './Post.css';
import {withRouter} from 'react-router-dom';
class SinglePost extends React.Component{
    done=()=>{
        this.props.history.push('/Post/'+this.props.id);
    }
    render(props){
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {this.props.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.done}>Full Post</Button>
                </CardActions>
            </Card>
        ) 
    }
}
export default withRouter(SinglePost);