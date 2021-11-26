import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from "./HeaderLeft.module.scss";

const HeaderLeft = () => {
  return (
    <div className={classes.boxLeft}>
      <div className={classes.cart}>
        <span className={classes.iconCart}>
          <MdOutlineShoppingCart />
        </span>
        <span className={classes.badge}>0</span>
      </div>
      <div className={classes.login}>
        <span className={classes.iconLogin}>
          <HiOutlineLogin />
        </span>
        <span className={classes.loginText}>ورود</span>
      </div>
    </div>
  );
};

export default HeaderLeft;
