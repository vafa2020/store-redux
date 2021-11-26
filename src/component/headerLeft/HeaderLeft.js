import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from "./HeaderLeft.module.scss";

const HeaderLeft = () => {
  return (
    <div className={classes.boxLeft}>
      <div className={classes.login}>
        <span className={classes.loginText}>ورود</span>
        <span className={classes.iconLogin}>
          <HiOutlineLogin />
        </span>
      </div>
      <span className={classes.cart}>
        <MdOutlineShoppingCart />
      </span>
    </div>
  );
};

export default HeaderLeft;
