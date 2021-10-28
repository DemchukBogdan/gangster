import React from "react";
import "../css/style.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Container from "react-bootstrap/Container";
import ThankBlock from "./main/ThankBlock";
import GroupButton from "../UI/button/GroupButton";

function Thank() {
  return (
    <div>
      <Header />
      <div className="topSpace"></div>
      <GroupButton/>
      <ThankBlock/>
      
      <Footer></Footer>
    </div>
  );
}

export default Thank;
