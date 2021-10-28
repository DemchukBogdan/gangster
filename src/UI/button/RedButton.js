import React from 'react';
import classes from './RedButton.module.css'
import { Link } from 'react-router-dom';

function RedButton(props) {
    return (
       <Link to='/menu' className={classes.none}>
        <button {...props} className={classes.redBtn}>
            {props.children}
        </button>
        </Link> 
    );
}

export default RedButton;