import React , {Component} from 'react';

const lazyLoaded = (imported)=>{
   return  class lazyLoad extends Component{
        state={
            component:null
        }
        componentDidMount(){
            imported().then(data=>{
                console.log('lazy loaded ',data);
                this.setState({component:data.default});
            });
        }
        render(){
            var C = this.state.component;
            return  (
                (C)? <C {...this.props}/> : null
            );
        
        }
    }
}
export default lazyLoaded