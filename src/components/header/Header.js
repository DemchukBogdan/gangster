import React from "react";
import "../../css/style.css";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
// import Container from "react-bootstrap/Container";
import { Container } from "@material-ui/core";

import logo from "../../image/logo.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

function Header({ totalItems }) {
  return (
    <div className={classes.headerTop}>
      <Container>
        
        <div className={classes.headerStyle}>
        <div className="logoSelect">
          <img src={logo} alt="logo" className={classes.headerLogo} />

          <select name="" id="" className={classes.selectLang}>
            <option value="val1">UA</option>
            <option value="val1">RUS</option>
          </select>
          </div>
          <ul className={classes.small}>
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

          <ul>
            <li className={classes.tel}>+38 068 88 877 07</li>

            <li className={classes.shopIcon}>
              <IconButton
                component={Link}
                to="/shop"
                aria-label="Show cart items"
                color="inherit"
                className={classes.shopIcon}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
