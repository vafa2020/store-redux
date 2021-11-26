import { products } from "../../server/data";
import classes from "./Product.module.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Product = () => {
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <div>
          <img src={product.image} alt="productImage" />
          <div>
            <h2>{product.title}</h2>
            <div>
              <span>
                <AiOutlineFieldTime />
              </span>
              <p>مدت: {product.time}ساعت</p>
            </div>
            <Link to={`courses/${product.name}`}>مشاهده دوره</Link>
          </div>
          <div>
            <Button size="large" variant="contained" color="secondary">
              ثبت نام دوره
            </Button>
            <span>{product.price} تومان</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
