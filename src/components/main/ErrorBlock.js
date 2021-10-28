import React from "react";
import classes from "./ThankBlock.module.css";
import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function ErrorBlock(props) {
  return (
    <div className={classes.bg}>
      <Container>
        <div className={classes.textPosition}>
          <div className={classes.text}>
          Упппссс.... Щось пішло не так, спробуйте пізніше
        </div>
        
        </div>
        <div className={classes.btnPosition}>
            <Link className={classes.none} to='/'>
            
        <button className={classes.mainBtn}> 
            На головну
        </button>
        </Link>
        </div>
        
      </Container>
    </div>
  );
}

export default ErrorBlock;
