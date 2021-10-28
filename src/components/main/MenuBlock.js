import React, { useState } from "react";
import Products from "../products/Products";
import "../../css/style.css";
import classes from "./MenuBlock.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { NavLink } from "react-router-dom";
import arrow from "../../svg/right.svg";
import pizza from "../../svg/pizza.svg";
import sushi from "../../svg/sushi.svg";

function MenuBlock({ products, handleAddToCard }) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(8);
  return (
    <div className={classes.bg}>
      <Container>
        <Row>
          <div className={classes.way}>
            <div className={classes.wayItem}>Головна</div>

            <img src={arrow} alt="" className={classes.arrowRight} />

            <div className={classes.wayItem}>Меню</div>

            
          </div>
        </Row>

        <Row>
          <div className={classes.panel}>
            <button className="navMenu" onClick={() => setActiveCategoryIdx(8)}>
              Піцца
              {/* <img src={pizza} alt="" className="navIcon" /> */}
            </button>

            <button className="navMenu" onClick={() => setActiveCategoryIdx(7)}>
              Суші
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>

            <button className="navMenu" onClick={() => setActiveCategoryIdx(6)}>
              Закуски
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>

            <button className="navMenu" onClick={() => setActiveCategoryIdx(5)}>
              Мясо та риба
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>

            <button className="navMenu" onClick={() => setActiveCategoryIdx(4)}>
              Паста
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>
            <button className="navMenu" onClick={() => setActiveCategoryIdx(3)}>
              Перші страви
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>
            <button className="navMenu" onClick={() => setActiveCategoryIdx(2)}>
             Салати
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>
            <button className="navMenu" onClick={() => setActiveCategoryIdx(1)}>
             Гарніри
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>
            <button className="navMenu" onClick={() => setActiveCategoryIdx(0)}>
             Десерти
              {/* <img src={sushi} alt="" className="navIcon" /> */}
            </button>
          </div>
        </Row>

        <Products
          products={products}
          onAddToCart={handleAddToCard}
          activeCategoryIndex={activeCategoryIdx}
        ></Products>
      </Container>
    </div>
  );
}

export default MenuBlock;
