import classes from "./Homepage.module.scss";
import Maintop from "../../component/mainTop/Maintop";
import Layout from "../../layout/Layout";
import Mainmiddle from "../../component/mainMiddle/Mainmiddle";
import Product from "../../component/product/Product";
import Mainbottom from "../../component/mainBottom/Mainbottom";
import Honors from "../../component/honors/Honors";

const Homepage = () => {
  return (
    <Layout>
      <div className={classes.main}>
        <Maintop />
        <Mainmiddle />
        <Product />
        <Mainbottom />
        <Honors />
      </div>
    </Layout>
  );
};

export default Homepage;
