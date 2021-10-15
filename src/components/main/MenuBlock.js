import React, { useState }  from "react";
import Products from "../products/Products";
import "../../css/style.css";
import classes from "./MenuBlock.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrow from "../../svg/right.svg";
import pizza from "../../svg/pizza.svg";
import sushi from "../../svg/sushi.svg";




function MenuBlock({products, handleAddToCard}) {
  useState
  return (


    
    <div className={classes.bg}>
      <Container>
        <Row>
          <div className={classes.way}>
            <div className={classes.wayItem}>Головна</div>

            <img src={arrow} alt="" className={classes.arrowRight} />

            <div className={classes.wayItem}>Меню</div>

            <img src={arrow} alt="" className={classes.arrowRight} />

            <div className={classes.wayItem}>Піца</div>
          </div>
        </Row>

        <Row>
          <div className={classes.panel}>
            <NavLink to="/menu/pizza" activeClassName="selected">
              <button className="navMenu">
                Піцца
                <img src={pizza} alt="" className="navIcon" />
              </button>
            </NavLink>
            <NavLink to="/menu/sushi" activeClassName="selected">
              <button className="navMenu">
                Суші
                <img src={sushi} alt="" className="navIcon" />
              </button>
            </NavLink>
          </div>
        </Row>
        <Products products={products} onAddToCart={handleAddToCard}></Products>
      </Container>
    </div>
  );
}

export default MenuBlock;
