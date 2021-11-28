import { useSelector } from "react-redux";
import classes from "./Cartdetails.module.scss";

const Cartdetails = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <>
      {cart.map((product) => (
        <div className={classes.cartDetails}>
          <span>
            <img src={product.image} alt="product" />
          </span>
          <div className={classes.description}>
            <h4>{product.title}</h4>
            {product.description.map((desc) => (
              <p>{desc.support}</p>
            ))}
            <p>{product.offPrice}</p>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cartdetails;
{
  /* <BiCheckCircle/> */
}
