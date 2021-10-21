import React from "react";
import "../css/style.css";
import Header from "./header/Header";
import ThirdBlock from "./main/ThirdBlock";
import Footer from "./footer/Footer";
import GroupButton from "../UI/button/GroupButton";


function Delivery({cart}) {
  return (
    <div>
      
      <Header totalItems={cart.total_items} />
      <div className="topSpace"></div>
      {/* <GroupButton/> */}
      <ThirdBlock></ThirdBlock>
      <Footer></Footer>
    
    </div>
  );
}

export default Delivery;
