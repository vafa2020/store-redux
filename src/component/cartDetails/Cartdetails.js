import { useDispatch } from "react-redux";
import classes from "./Cartdetails.module.scss";
import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { Helper } from "scriptpack";

const Cartdetails = ({ cart }) => {
  const dispatch = useDispatch();
  const removeProduct = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };
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
              {product.description.map((desc,index) => (
                <p key={index} className={classes.paragraphDesc}>
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
              <p onClick={() => removeProduct(product)}>
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
