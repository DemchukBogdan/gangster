import * as React from "react";

import { useState } from "react";
import { send } from "emailjs-com";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { TextField, TextareaAutosize } from "@material-ui/core";
import {
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useForm } from "react-hook-form";
import classes from "./Checkout.module.css";
import "../../css/style.css";
import { sendForm } from "emailjs-com";

import { useHistory } from "react-router-dom";

export default function AddressForm2({ cart, handleEmptyCart }) {
  let history = useHistory();

  const raw = (cart&&cart.subtotal)&&cart.subtotal.raw;
  const Sum = raw + 15;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
 

  const [toSend2, setToSend2] = useState({
    firstName: "",
    phone: "",
    sum: Sum,
    product: cart&&cart.line&&cart.line_items.map((item) => (item.name)),
    currency: "",
    time: "",
    recall: "",
    coment: "",
  });

  const handleChange = (e) => {
    setToSend2({ ...toSend2, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_u4pz6rn",
      "template_11a4dnn",

      toSend2,
      "user_9ORa2TwbMnTRU7yVWa0io"
    )
      .then((response) => {
        handleEmptyCart();
        if (toSend2.currency === "готівка") return history.push("/thank");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const [age, setAge] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.secondTitle}>
        Дані для самовивозу
      </Typography>
      <form onSubmit={sendForm}>
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("lastName")}
              required
              id="lastName"
              name="lastName"
              label="Прізвище"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("time")}
              required
              id="time"
              name="time"
              label="Коли заберите?"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel id="SimpleSelect">Оплата</InputLabel>
            <Select
              {...register("select")}
              required
              name="currency"
              labelId="select"
              id="select"
              label="age"
              value={toSend2.currency}
              onChange={handleChange}
            >
              <MenuItem value={"готівка"}>Готівка</MenuItem>
              <MenuItem value={"карта"}>Карта</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("coment")}
              multiline
              id="coment"
              name="coment"
              label="Коментар"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              {...register("recall")}
              control={<Checkbox color="secondary" name="recall" value="yes" />}
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
              <Link to="/agreement"> угоду користувача</Link>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
