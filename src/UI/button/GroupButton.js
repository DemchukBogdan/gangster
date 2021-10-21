import React from "react";
import PizzaButton from "./PizzaButton";
import classes from "./PizzaButton.module.css";
import SushiBtn from './SushiBtn'
function GroupButton(props) {
  return (
    <div className={classes.posGroup}>
      <PizzaButton></PizzaButton>
      <SushiBtn></SushiBtn>
    </div>
  );
}

export default GroupButton;
