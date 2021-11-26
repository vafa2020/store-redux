import classes from "./Homepage.module.scss";
import Maintop from "../../component/mainTop/Maintop";
import Layout from "../../layout/Layout";
import Mainmiddle from "../../component/mainMiddle/Mainmiddle";
import Product from "../../component/product/Product";

const Homepage = () => {
  return (
    <Layout>
      <main className={classes.main}>
        <Maintop />
        <Mainmiddle />
        <Product />
      </main>
    </Layout>
  );
};

export default Homepage;
