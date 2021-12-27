import classes from "./Signupform.module.scss";
import Input from "../input/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { signUp } from "../../services/sinupService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/auth/authActions";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const Signupform = () => {
  const dispatch = useDispatch;
  const [error, setError] = useState(null);
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("نام خود را وارد کنید")
      .min(6, "حداقل کارکتر 6 میباشد"),
    email: yup
      .string()
      .email("ایمیل شما معتبر نیست.")
      .required("ایمیل را وارد کنید."),
    phoneNumber: yup
      .string()
      .required("شماره موبایل خود را وارد کنید.")
      .matches(
        /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
        "format is invalid"
      ),
    password: yup.string().required("پسورد را وارد کنید."),
  });
  const onSubmit = async (valuse) => {
    try {
      const { data } = await signUp(valuse);
      dispatch(signUpUser(data));
      setError(null);
    } catch (error) {
      if (error.response && error.response.data) {
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
    <div className={classes.signupForm}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          label="نام"
          formik={formik}
          placeholder="نام ..."
        />
        <Input
          type="email"
          name="email"
          label="ایمیل"
          formik={formik}
          placeholder="ایمیل ..."
        />
        <Input
          type="tel"
          name="phoneNumber"
          label="شماره موبایل"
          formik={formik}
          placeholder="شماره موبایل ..."
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
          ثبت نام
        </button>
        <Link className={classes.link} to="/login">
          <p className={classes.textLink}> قبلا ثبت نام کردم </p>
        </Link>
      </form>
    </div>
  );
};

export default Signupform;
