import React from "react";
import "../css/style.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ReviewsBlock from "./main/ReviewsBlock";
import GroupButton from "../UI/button/GroupButton";
function Reviews({cart}) {
  return (
    <div>
      <Header totalItems={cart.total_items} />
      <div className="topSpace"></div>
      
      <ReviewsBlock></ReviewsBlock>
      <Footer></Footer>
    </div>
  );
}

export default Reviews;
