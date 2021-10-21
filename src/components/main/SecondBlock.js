import React, { useState } from "react";
import "../../css/style.css";
import classes from "./SecondBlock.module.css";
import { Container } from "@material-ui/core";
import like from "../../svg/like.svg";
import Slider from "react-slick";
import { Grid } from "@material-ui/core";
import Product from "../products/Product";


function SecondBlock({ products, handleAddToCard }) {
  const [activeCategoryIdx] = useState(8);
  return (
    <div className={classes.bg}>
      <Container>
        <div className={classes.titlePosition}>
          <h1 className="mainTitle">Рекомендуємо</h1>
          <img src={like} alt="" className={classes.like} />
        </div>
        
          {products.length && (
             
            <Slider
              {...{
                dots: true,
                infinite: true,
                lazyLoad: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 500,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={11} md={11} lg={11}>
                  <Product
                    product={product}
                    onAddToCart={handleAddToCard}
                    activeCategoryIndex={activeCategoryIdx}
                  />
                </Grid>
              ))}
            </Slider>
           
          )
          }
        
      </Container>
    </div>
  );
}

export default SecondBlock;
