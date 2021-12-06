import Loginform from "../../component/loginForm/Loginform";
import Layout from "../../layout/Layout";
import classes from "./Login.module.scss";
const Login = () => {
  return (
    <Layout>
      <div className={classes.login}>
        <Loginform />
      </div>
    </Layout>
  );
};

export default Login;
