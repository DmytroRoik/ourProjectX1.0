import React,{Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Layout.css';
import Aux from '../hoc/Aux';

class Layout extends Component{
  render(){
    return (
      <Aux>
        <Toolbar/>    
        <div className={classes.Layout}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Layout;
