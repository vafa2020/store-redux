import { products } from "../../server/data";
import classes from "./Product.module.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
const Product = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div id="course" className={classes.products}>
      {products.map((product) => (
        <div key={product.id} className={classes.product}>
          <img src={product.image} alt="productImage" />
          <div className={classes.desc}>
            <h4>{product.title}</h4>
            <div className={classes.timeBox}>
              <span className={classes.iconTimer}>
                <AiOutlineFieldTime />
              </span>
              <p>مدت: {product.time} ساعت</p>
            </div>
            <div className={classes.boxLinkCourse}>
              <Link className={classes.linkCard} to={`courses/${product.name}`}>
                مشاهده دوره
              </Link>
              <span>
                <HiOutlineArrowNarrowLeft />
              </span>
            </div>
            <div className={classes.boxSignPrice}>
              <Button
                onClick={() => addToCart(product)}
                size="large"
                variant="contained"
                color="secondary"
              >
                ثبت نام دوره
              </Button>
              <span>{product.price} تومان</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
