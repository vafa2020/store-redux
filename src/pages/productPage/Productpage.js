import Layout from "../../layout/Layout";
import Product from "../../component/product/Product";
import classes from "./Productpage.module.scss";

const Productpage = () => {
  return (
    <Layout>
      <div className={classes.productPage}>
        <Product />
      </div>
    </Layout>
  );
};

export default Productpage;
