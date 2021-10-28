import React from "react";
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import "../../css/style.css";
import useStyle from "./ProductStyle.js";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";

const Product = ({ product, onAddToCart }) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: '#FFD644'[500],
      color: "#000000",
      "&:hover": {
        bgcolor: "#333333"[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };

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
        <button
          className={classes.order}
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Замовити
        </button>
        {loading && (
          <CircularProgress className={classes.circle}
            size={24}
            sx={{
              
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}

        {/* <button className={classes.order}>Замовити</button> */}
      </CardActions>
    </Card>
  );
};
export default Product;
