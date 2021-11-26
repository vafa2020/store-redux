import classes from "./Homepage.module.scss";
import Maintop from "../../component/mainTop/Maintop";
import Layout from "../../layout/Layout";

const Homepage = () => {
  return (
    <Layout>
      <main className={classes.main}>
        <Maintop />
      </main>
    </Layout>
  );
};

export default Homepage;
