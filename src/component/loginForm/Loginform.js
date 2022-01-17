import classes from "./Loginform.module.scss";
import Input from "../input/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { loginServer } from "../../services/loginService";
import { loginUser } from "../../redux/auth/authActions";

const initialValues = {
  email: "",
  password: "",
};

const Loginform = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "";

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("ایمیل شما معتبر نیست.")
      .required("ایمیل را وارد کنید."),
    password: yup.string().required("پسورد را وارد کنید."),
  });
  const onSubmit = async (valuse) => {
    try {
      const { data } = await loginServer(valuse);
      dispatch(loginUser(data));
      setError(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className={classes.loginform}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name="email"
          label="ایمیل"
          formik={formik}
          placeholder="ایمیل ..."
        />
        <Input
          type="password"
          name="password"
          label="پسورد"
          formik={formik}
          placeholder="پسورد ..."
        />
        {error && <p style={{ color: "red", fontSize: "1.2rem" }}>{error}</p>}

        <button
          className={classes.button}
          type="submit"
          disabled={!formik.isValid}
        >
          ورود
        </button>
        <Link className={classes.link} to={`/signin?redirect=${redirect}`}>
          <p className={classes.textLink}>ثبت نام نکرده ام</p>
        </Link>
      </form>
    </div>
  );
};

export default Loginform;
