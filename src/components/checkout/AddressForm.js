import * as React from "react";
import { useState, useRef } from "react";
import { send } from "emailjs-com";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField, TextareaAutosize } from "@material-ui/core";
import {
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import classes from "./Checkout.module.css";
import "../../css/style.css";


import { useHistory } from "react-router-dom";

import {Button} from '@material-ui/core';
import {CircularProgress} from '@material-ui/core';
// import { green } from '@material-ui/core';





let delivery = 45;

export default function AddressForm({ cart, handleEmptyCart }) {


 







  const [inProp, setInProp] = useState(false);
  let history = useHistory();
 

  if (cart&&cart.subtotal&&cart.subtotal.raw > 500) {
    
    delivery = 0;
  }

  const raw = (cart&&cart.subtotal)&&cart.subtotal.raw;
  const Sum = raw + delivery + 15;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  const [age, setAge] = React.useState("");

  const [toSend, setToSend] = useState({
    firstName: "",
    phone: "",
    city: "",
    sum: Sum,
    product: cart&&cart.line&&cart.line_items.map((item) => (item.name)),
    currency: "",
    partMoney: "",
    street: "",
    house:"",
    float: "",
    time: "",
    menuItem: "",
    recall: "",
    coment: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_u4pz6rn",
      "template_zrn4hru",

      toSend,
      "user_9ORa2TwbMnTRU7yVWa0io"
    )
      .then((response) => {
    
        handleEmptyCart()
      if (toSend.currency==='готівка') return  history.push('/thank')
      })
      .catch((err) => {
        console.log("FAILED...", err);
        return  history.push('/error')
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.secondTitle}>
        Дані для доставки
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.customField}
              {...register("firstName")}
              required
              id="firstName"
              name="firstName"
              label="Ім'я"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("city")}
              required
              id="city"
              name="city"
              label="Місто"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("phone")}
              id="phone"
              name="phone"
              label="Телефон"
              fullWidth
              autoComplete="phone"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("street")}
              required
              multiline
              id="street"
              name="street"
              label="Вулиця"
              fullWidth
              autoComplete="address-line1"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel id="SimpleSelect">Оплата</InputLabel>
            <Select
              {...register("select")}
              required
              name='currency'
              labelId="select"
              id="select"
              label="age"
              value={toSend.currency}
              onChange={handleChange}
            >
              <MenuItem value={'готівка'}>Готівка</MenuItem>
              <MenuItem value={'карта'}>Карта</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("house")}
              id="address3"
              name="house"
              label="Будинок"
              fullWidth
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("time")}
              required
              id="time"
              name="time"
              label="Коли доставити?"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("Float")}
              id="address5"
              name="Float"
              label="Квартира"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("partMoney")}
              id="partMoney"
              name="partMoney"
              label="Підготувати решту з"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("coment")}
              multiline
              id="coment"
              name="coment"
              label="Коментар"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              {...register("recall")}
              control={<Checkbox color="secondary" name="recall" value="yes" />}
              onChange={handleChange}
              label="Передзвоніть мені для уточнення деталей замовлення"
            />
          </Grid>
        </Grid>
        <div className={classes.formBg3}>
          <div className={classes.checkContainer}>
            <div className={classes.displayContainer}>
              <div className={classes.rowContainer}>
                <div className={classes.leftItem}>Сума</div>
                <div className={classes.rightItem}>{raw}грн</div>
              </div>
              <div className={classes.rowContainer}>
                <div className={classes.leftItem}>Доставка</div>
                <div className={classes.rightItem}>{delivery}грн</div>
              </div>
              <div className={classes.rowContainer}>
                <div className={classes.leftItem}>Упаковка</div>
                <div className={classes.rightItem}>15грн</div>
              </div>
              <div className={classes.rowContainer}>
                <div className={classes.lastItem}>До сплати</div>
                <div className={classes.lastItem}>{Sum}грн</div>
              </div>
            </div>
          </div>
          <div className={classes.btnContainer}>
            <button type="submit" className={classes.orderBtn}>
              Оформити замовлення
            </button>
          </div>
          <div className={classes.withDevil}>
            <div className={classes.devilContainer}>
              Натискаючи кнопку, я приймаю
              <Link to='/agreement'> угоду користувача</Link>
            </div>
          </div>
        </div>
      </form>


     
        

    </React.Fragment>
  );
}
