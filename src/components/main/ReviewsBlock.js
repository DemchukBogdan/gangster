import React from "react";
import "../../css/style.css";
import classes from "./ReviewsBlock.module.css";
import Container from "react-bootstrap/Container";
import MultipleItems from "./Slider";


function ContactsBlock(props) {
  return (
    <div className={classes.bg}>
      <Container>
        <h1 className={classes.mainTitle}>А ти уже скуштував наші страви?</h1>

        <MultipleItems></MultipleItems>
        <div className={classes.btnPos}>
          <a href="https://www.instagram.com/" className={classes.none}>
          <button className={classes.btn} >Залишити відгук</button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default ContactsBlock;
