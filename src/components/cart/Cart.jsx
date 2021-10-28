import React from 'react';
import { useState} from "react";
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';



const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

 

  const classes = useStyles();



  const EmptyCart = () => (
    <Typography variant="subtitle1" className={classes.noThing}>Ви ще не вибрали нічого,
      <Link className={classes.link} to="/menu">перейти в меню, для вибору</Link>!
    </Typography>
  );


  

  const FilledCart = () => (



    <>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Назва</TableCell>
              <TableCell align="center">Ціна</TableCell>
              <TableCell align="center">Кількість   </TableCell>
              <TableCell align="center">Всього</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.line_items.map((item) => (
              <TableRow

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {/* <CardMedia image={item.image.url} alt={item.name} className={classes.media} /> */}
                  {item.name}
                </TableCell>
                <TableCell align="center">{item.price.formatted}грн</TableCell>
                <TableCell align="center" >
                  <div className={classes.pos}>
                    <div className={classes.buttons}>
                      <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} >-</Button>
                      <Typography> &nbsp;{item.quantity}&nbsp;</Typography>
                      <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} >+</Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">{item.line_total.formatted}грн</TableCell>
                <TableCell align="right"> <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>x</Button></TableCell>
              </TableRow>




            ))}
          </TableBody>
        </Table>


      </TableContainer>

 

      <div className={classes.cardDetails}>
        <Typography variant="h5" className={classes.cost}>Сума: {cart.subtotal.formatted}грн</Typography>
        <div>
          <Button className={classes.emptyButton}  type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Спорожнити кошик</Button>
          <Button component={Link} to='/checkout' className={classes.checkoutButton}  type="button" variant="contained" color="primary">Оформити замовлення</Button>
        </div>
      </div>
    </>
  )

  if (!cart.line_items) return 'Loading...';

  return (
    <div className={classes.bg1}>
      <Container>

        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h4" gutterBottom>Корзина</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};

export default Cart;
