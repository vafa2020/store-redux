import { products } from "../../server/data";
import classes from "./Product.module.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Product = () => {
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <div className={classes.product}>
          <img src={product.image} alt="productImage" />
          <div className={classes.desc}>
            <h4>{product.title}</h4>
            <div className={classes.timeBox}>
              <span>
                <AiOutlineFieldTime />
              </span>
              <p>مدت: {product.time}ساعت</p>
            </div>
            <Link to={`courses/${product.name}`}>مشاهده دوره</Link>
            <div>
              <Button size="large" variant="contained" color="secondary">
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
