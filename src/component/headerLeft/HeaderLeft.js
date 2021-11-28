import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./HeaderLeft.module.scss";

const HeaderLeft = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <div className={classes.boxLeft}>
      <div className={classes.cart}>
        <Link to="/cart">
          <span className={classes.iconCart}>
            <MdOutlineShoppingCart />
          </span>
        </Link>
        <span className={classes.badge}>{cart.length}</span>
      </div>
      <div className={classes.login}>
        <Link to="/auth">
          <span className={classes.iconLogin}>
            <HiOutlineLogin />
          </span>
        </Link>
        <span className={classes.loginText}>ورود</span>
      </div>
    </div>
  );
};

export default HeaderLeft;
