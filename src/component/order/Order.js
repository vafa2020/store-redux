import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helper } from "scriptpack";
import classes from "./Order.module.scss";

const Order = ({ cart, total }) => {
  const price = cart.reduce((Total, item) => {
    return Total + item.price;
  }, 0);
  return (
    <div className={classes.order}>
      <div className={classes.price}>
        <span>قیمت کالاها</span>
        <span>{Helper.toCurrencyFormat(price)}</span>
      </div>
      <div className={classes.discount}>
        <span>تخفیف کالاها</span>
        <span>{Helper.toCurrencyFormat(price - total)}</span>
      </div>
      <div className={classes.total}>
        <span>جمع سبد خرید</span>
        <span>{Helper.toCurrencyFormat(total)}</span>
      </div>
      <Link to="/checkout">
        <Button
          className={classes.button}
          href="#course"
          size="large"
          variant="contained"
          color="secondary"
        >
          ادامه سفارش
        </Button>
      </Link>
    </div>
  );
};

export default Order;
