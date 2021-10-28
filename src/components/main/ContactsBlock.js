import React from "react";
import "../../css/style.css";
import classes from "./ContactsBlock.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sheff from "../../image/contact.png";
import facebook from "../../svg/facebook.svg";
import insta from "../../svg/insta.svg";

function ContactsBlock(props) {
  return (
    <div className={classes.bg}>
      <Container>
        <Row>
          <Col>
            <img src={sheff} alt="" className={classes.imgPos} />
          </Col>

          <Col>
            <div className={classes.titlePosition}>
              <h1 className="mainTitle">Наші контакти</h1>
            </div>
            <div className={classes.adress}>Адреса:</div>
            <div className={classes.answ}>м. Житомир, пл.Перемоги</div>
            <div className={classes.adress}>Ел. адреса:</div>
            <div className={classes.answ}>gangster@mail.com</div>
            <div className={classes.adress}>Ми в соц.мережах:</div>
            <div className={classes.answ}>
              <ul >
                <li className={classes.media768}>
                  <a href="https://www.instagram.com/gangster.zt/">
                    <img src={insta} alt="" className={classes.footerSvg} />
                  </a>
                </li>
                <li className={classes.media768}>
                  <a href="https://www.instagram.com/gangster.zt/">
                    <img src={facebook} alt="" className={classes.footerSvg} />
                  </a>
                </li>
              </ul>
              <div className={classes.tel}>+38 068 88 877 07</div>
              {/* <button className={classes.yellowBtn}>Перезвоніть мені</button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactsBlock;
