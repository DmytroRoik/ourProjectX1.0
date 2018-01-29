import React from 'react';
import classes from './Category.css';

const category=(props)=>(
  <div className={classes.Category}>
    {props.title||props.children}
  </div>
);
export default category;
