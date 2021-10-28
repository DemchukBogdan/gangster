import React, { useState, useEffect } from "react";
import "../css/style.css";
import Header from "./header/Header";
import FirstBlock from "./main/FirstBlock";
import SecondBlock from "./main/SecondBlock";
import ThirdBlock from "./main/ThirdBlock";
import Footer from "./footer/Footer";
import { commerce } from "../../src/lib/commerce";
import GroupButton from "../UI/button/GroupButton";

function Main({cart, products, handleAddToCard}) {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const { data } = await commerce.products.list();

//     setProducts(data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
  return (
    <div>
      <Header totalItems={cart.total_items}/>
      {/* <GroupButton></GroupButton> */}
      <FirstBlock></FirstBlock>
      <SecondBlock products={products} handleAddToCard={handleAddToCard}></SecondBlock>
      <ThirdBlock></ThirdBlock>
      <Footer></Footer>
    </div>
  );
}

export default Main;
