import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import NotFound from "./NotFound";
import Main from "./Main";
import Delivery from "./Delivery";
import Contacts from "./Contacts";
import Reviews from "./Reviews";
import Menu from "./Menu";
import { commerce } from "../../src/lib/commerce";

import Shop from "./Shop";
import Thank from "./Thank";
import Agreement from "./main/Agreement";
import ErrorBlock from "./main/ErrorBlock";

const Router = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const [AllProducts, setAllProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const categories = await commerce.categories.list();
    const products = await commerce.products.list();

    const productsPerCategory = categories.data.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.data.filter((p) =>
            p.categories.find((c) => c.id === category.id)
          ),
        },
      ];
    }, []);
    setAllProducts(products.data);
    setProducts(productsPerCategory);
  }, [products]);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCard = async (productId, quanitity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quanitity);
    setCart(cart);
    } catch (error) {
      console.log({error});
    }
    
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(async () => {
    await fetchProducts();
    await fetchCart();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            cart={cart}
            products={AllProducts}
            handleAddToCard={handleAddToCard}
          />
        </Route>
        <Route exact path="/menu">
          <Menu
            products={products}
            handleAddToCard={handleAddToCard}
            cart={cart}
          />
        </Route>

        <Route exact path="/delivery">
          <Delivery cart={cart} />
        </Route>
        <Route exact path="/reviews">
          <Reviews cart={cart} />
        </Route>
        <Route exact path="/contacts">
          <Contacts cart={cart} />
        </Route>

        <Route exact path="/shop">
          <Shop
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout cart={cart} handleEmptyCart={handleEmptyCart}/>
        </Route>
        <Route exact path="/thank">
          <Thank />
        </Route>
        <Route exact path="/error">
          <ErrorBlock/>
        </Route>
        <Route exact path="/agreement">
          <Agreement/>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
