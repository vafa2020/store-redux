import Signupform from "../../component/signup-form/Signupform";
import Layout from "../../layout/Layout";
import classes from "./Signup.module.scss";
const Signup = () => {
  return (
    <Layout>
      <div className={classes.signUp}>
        <Signupform />
      </div>
    </Layout>
  );
};

export default Signup;
