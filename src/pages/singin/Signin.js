
import Signinform from "../../component/signin-form/Signinform";
import Layout from "../../layout/Layout";
import classes from "./Signin.module.scss";
const Signin = () => {
  return (
    <Layout>
      <div className={classes.signUp}>
        <Signinform />
      </div>
    </Layout>
  );
};

export default Signin;
