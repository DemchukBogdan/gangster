import React from "react";
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

import '../../css/style.css'
import useStyle from "./SliderProductStyle.js";

const SliderProduct = ({ product, onAddToCart }) => {
  const classes = useStyle();


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image && product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            {product.name}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          className={classes.desc1}
          component="p"
        />

        <div className={classes.cardPrice}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            {product.price && product.price.formatted}грн
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.price}>
            {product.load}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        className={classes.cardAction}
        onClick={() => onAddToCart(product.id, 1)}
      >

        <button className={classes.order}>Замовити</button>
      </CardActions>
    </Card>
  );
};
export default SliderProduct;
