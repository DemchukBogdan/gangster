import React from "react";
import Product from "./Product";
import { Grid } from "@material-ui/core";

const Products = ({ products, onAddToCart, activeCategoryIndex }) => {
  return (
    <main>
      <Grid container justify="center" spacing={3}>
        {products.length &&
          products[activeCategoryIndex].productsData.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Products;
