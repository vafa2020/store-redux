import classes from "./Loginform.module.scss";
import Input from "../input/Input";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const Loginform = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("ایمیل شما معتبر نیست.")
      .required("ایمیل را وارد کنید."),
    password: yup.string().required("پسورد را وارد کنید."),
  });
  const onSubmit = (valuse) => {
    console.log(valuse);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className={classes.loginform}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Input type="email" name="email" label="ایمیل" formik={formik}  placeholder="ایمیل ..."/>
        <Input type="password" name="password" label="پسورد" formik={formik} placeholder="پسورد ..."/>
        <button
          className={classes.button}
          type="submit"
          disabled={!formik.isValid}
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default Loginform;
