import { useState } from "react";
import { Helper } from "scriptpack";
import Discount from "../discount/Discount";
import classes from "./Order.module.scss";

const Order = ({ cart, total }) => {
  const [status, setStatus] = useState(false);
  return (
    <div className={classes.order}>
      <h2>سفارش شما</h2>
      <div className={classes.titles}>
        <span> محصول</span>
        <span>جمع جزء</span>
      </div>
      {cart.map((item) => (
        <div key={item.id} className={classes.desc}>
          <span>
            {item.title}*{item.quantity}
          </span>
          <span>{Helper.toCurrencyFormat(item.offPrice)}</span>
        </div>
      ))}
      <p onClick={() => setStatus(!status)} className={classes.discount}>
        کد تخفیف دارید؟
      </p>
      {status && <Discount />}
      <div className={classes.total}>
        <span>مجموع</span>
        <span>{Helper.toCurrencyFormat(total)}</span>
      </div>
    </div>
  );
};

export default Order;
