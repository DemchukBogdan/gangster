import * as React from "react";
import { useState, useEffect, useHistory } from "react";
import { Box, Tabs, Tab, Container, Typography } from "@material-ui/core";

import AddressForm from "./AddressForm";
import AddressForm2 from "./AddressForm2";
import Review from "./Review";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import classes from "./Checkout.module.css";
import useStyles from './styles'
import { useForm } from "react-hook-form";
import { commerce } from "../../lib/commerce";

function TabPanel(props) {
  const classes2 = useStyles();
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Checkout({cart, handleEmptyCart}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
  return (
    <>
      <div className={classes.bg}>
        <Header totalItems={cart.total_items}/>
        <div className="topSpace"></div>
        <Container className={classes.formBg2}>
          <Tabs className={classes.tabColor}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Доставка" className={classes.tabColor} />
            <Tab label="Самовивіз" className={classes.tabColor} />
          </Tabs>
        </Container>
        <Container component="main" className={classes.formBg}>
          <TabPanel value={value} index={0}>
            <AddressForm cart={cart}  handleEmptyCart={handleEmptyCart}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddressForm2 cart={cart}  handleEmptyCart={handleEmptyCart}/>
          </TabPanel>
        </Container>
        <Footer></Footer>
      </div>
    </>
  );
}
