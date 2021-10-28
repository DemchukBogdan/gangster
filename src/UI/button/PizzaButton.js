import React from "react";
import classes from "./PizzaButton.module.css";
import pizza from "../../svg/pizza.svg";
import { Link } from "react-router-dom";
function PizzaButton(props) {
  return (
    <div>
        <Link to='/menu/pizza'>
      <button className={classes.btn}>
        Піцца
        <img src={pizza} alt="" className={classes.svg}/>
      </button>
      </Link>
    </div>
  );
}

export default PizzaButton;
