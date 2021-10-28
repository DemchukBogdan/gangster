import React from "react";
import "../css/style.css";
import Header from "./header/Header";
import ThirdBlock from "./main/ThirdBlock";
import Footer from "./footer/Footer";
import MenuBlock from "./main/MenuBlock";


function Menu({products, handleAddToCard, cart}) {

  return (
    <div>
      <Header totalItems={cart.total_items} />
      <div className="topSpace"></div>
      <MenuBlock products={products} handleAddToCard={handleAddToCard}></MenuBlock>
      
      <ThirdBlock></ThirdBlock>
      <Footer></Footer>
    </div>
  );
}

export default Menu;
