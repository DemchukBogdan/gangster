import React from "react";
import "../css/style.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";


function Shop({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {
  return (
    <div>
      <Header></Header>
      <div className="topSpace"></div>
      <Cart 
      cart={cart}
      handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}
      />
      <Footer></Footer>
    </div>
  );
}

export default Shop;
