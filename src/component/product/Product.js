import { products } from "../../server/data";
import classes from "./Product.module.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
const Product = () => {
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <div className={classes.product}>
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
              <span><HiOutlineArrowNarrowLeft/></span>
            </div>
            <div className={classes.boxSignPrice}>
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
