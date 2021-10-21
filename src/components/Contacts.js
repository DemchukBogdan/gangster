import React from "react";
import "../css/style.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ContactsBlock from "./main/ContactsBlock";
import GroupButton from "../UI/button/GroupButton";

function Contacts({cart}) {
  return (
    <div>
      <Header totalItems={cart.total_items} />
      <div className="topSpace"></div>
      {/* <GroupButton/> */}
      <ContactsBlock></ContactsBlock>
      <Footer></Footer>
    </div>
  );
}

export default Contacts;
