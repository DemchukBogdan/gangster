import React, {useState} from "react";
import "../../css/style.css";
import classes from "./FirstBlock.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pizza from "../../image/pizza-sale.png";
import RedButton from "../../UI/button/RedButton";

import mainPizza from "../../image/main-pizza.png";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

const translationsEn = {
  welcome: "Welcome!",
  "sample-text": "Sample <bold><italic>text</italic></bold>.",
  changed: "You have changed the language {{count}} time",
  changed_plural: "You have changed the language {{count}} times",
};

const translationsFr = {
  welcome: "Bienvenue!",
  "sample-text": "Exemple de <bold><italic>texte</italic></bold>.",
  changed: "Vous avez changé la langue {{count}} fois",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ua: { translation: translationsEn },
      ru: { translation: translationsFr },
    },
    lng: "ua",
    fallbackLng: "ua",
    interpolation: { escapeValue: false },
  });


function FirstBlock(props) {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    
  };


  return (
    <div className={classes.blogBg}>
      <Container>
        <Row>
          <Col>
            <div className={classes.left}>
              <img src={pizza} alt="" className={classes.pizzaTitle}/>
              <div className={classes.mainText}>
                Лише до кінця літа замовляй будь-яку піцу зі знижкою 30% та
                отримуй карту постійного покупця
              </div>
              <div className={classes.btnPosition}>
                <RedButton className={classes.btnCenter}>Дивитись меню</RedButton>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.right}>
              <div className={classes.clock}>
                <h2 className={classes.redClock}>11:00-22:00</h2>
                <div className={classes.deliveryText}>Доставка додому</div>
              </div>

             
            </div>
            <img src={mainPizza} alt="" className={classes.mainPizza} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FirstBlock;
