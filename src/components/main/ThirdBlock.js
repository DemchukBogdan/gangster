import React from "react";
import "../../css/style.css";
import classes from "./ThirdBlock.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pizza from "../../image/main-2.png";
import RedButton from "../../UI/button/RedButton";
import delivery from "../../svg/delivery.svg";

function ThirdBlock(props) {
  return (
    <div className={classes.bg}>
      
      <Container>
        <Row>
          <Col>
            <div className={classes.titlePosition}>
              <h1 className="mainTitle">Замовляй доставку</h1>
              <img src={delivery} alt="" className={classes.delivery} />
            </div>

            <div className={classes.deliveryText}>
              Зручна і комфортна послуга «Швидка доставка їжі від Gangster Pizza
              House» – чудове рішення для сучасних, мобільних людей, які цінують
              свій час, а також поважають оригінальну і смачну їжу.
            </div>

            <div className={classes.deliveryText}>
              Ви без особливих зусиль зможете замовити їжу в Gangster Pizza
              House, і це буде завжди ваш найсмачніший та дійсно поживний
              сніданок, бізнес-ланч, обід чи вечеря.
            </div>

            <div className={classes.deliveryText}>
              Неважливо, світло чи темно на дворі, якщо вам дуже закортіло
              скуштувати піцу або суші, Gangster Pizza House з радістю стане для
              вас особистим поваром та нагодує вас швидко та смачно.
            </div>

            <div className={classes.boldText}>Доставка по місту - 45 грн</div>
            <div className={classes.boldText}>
              Безкоштовна достака при замовленні на суму від 500 грн
            </div>
            <div className={classes.btnPos}>
              <RedButton>Дивитись меню</RedButton>
            </div>
          </Col>

          <Col>
            <img src={pizza} alt="" className={classes.imgPos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ThirdBlock;
