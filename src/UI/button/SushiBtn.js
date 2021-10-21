import React from "react";
import classes from "./PizzaButton.module.css";

import sushi from "../../svg/sushi.svg";
import { Link } from "react-router-dom";
function SushiButton(props) {
  return (
    <div>
        <Link to='/menu/sushi'>
      <button className={classes.btn}>
        Суші
        <img src={sushi} alt="" className={classes.svg}/>
      </button>
      </Link>
    </div>
  );
}

export default SushiButton;