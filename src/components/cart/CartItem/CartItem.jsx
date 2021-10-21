import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

 

  return (
    <Card className={classes.cartItem}>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted}грн</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} >-</Button>
          <Typography> &nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} >+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Видалити</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;