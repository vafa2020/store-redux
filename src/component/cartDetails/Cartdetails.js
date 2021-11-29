import { useSelector } from "react-redux";
import classes from "./Cartdetails.module.scss";
import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { Helper } from "scriptpack";

const Cartdetails = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className={classes.wrapper}>
      {cart.map((product) => (
        <div key={product.id} className={classes.cartDetails}>
          <span>
            <img src={product.image} alt="product" />
          </span>
          <div className={classes.boxDescription}>
            <h4>{product.title}</h4>
            <div className={classes.description}>
              {product.description.map((desc) => (
                <p key={desc.id} className={classes.paragraphDesc}>
                  <span className={classes.iconDesc}>
                    <BiCheckCircle />
                  </span>
                  <span className={classes.text}>{desc.support}</span>
                </p>
              ))}
            </div>
            <p className={classes.price}>
              {Helper.toCurrencyFormat(product.offPrice)}تومان
            </p>
            <div className={classes.controller}>
              <p>{product.quantity}</p>
              <p>
                <BiTrash />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cartdetails;
