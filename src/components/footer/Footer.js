import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";
import classes from "./Footer.module.css";
import {Container} from '@material-ui/core';
import insta from "../../svg/insta.svg";
import facebook from "../../svg/facebook.svg";
import logo from "../../image/logo.png";

function Footer(props) {
  return (
    <div className={classes.footerBg}>
      <Container>
        <div className={classes.headerStyle}>
          <img src={logo} alt="logo" className={classes.footerLogo} />

          <ul className={classes.posAbs}>
            <li>
              <NavLink
                to="/menu"
                activeClassName={classes.activeNav}
                className={classes.navLink}
              >
                Меню
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery"
                activeClassName={classes.activeNav}
                className={classes.navLink}
              >
                Доставка
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reviews"
                activeClassName={classes.activeNav}
                className={classes.navLink}
              >
                Відгуки
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts"
                activeClassName={classes.activeNav}
                className={classes.navLink}
              >
                Контакти
              </NavLink>
            </li>
          </ul>

          <ul className={classes.iconSpace}>
            <li className={classes.tel}>+38 068 88 877 07</li>
            <li>
              <a href="https://www.instagram.com/gangster.zt/">
                <img src={insta} alt="" className={classes.footerSvg} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/gangsterzt_-103831955337684">
                <img src={facebook} alt="" className={classes.footerSvg} />
              </a>
            </li>
          </ul>
        </div>

        <div className={classes.last}>
          © 2021 Gangster Pizza House | Всі права захищені
        </div>
      </Container>
    </div>
  );
}

export default Footer;
