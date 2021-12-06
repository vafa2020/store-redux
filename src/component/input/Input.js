import classes from "./Input.module.scss";

const Input = ({ formik, label, name, type, placeholder }) => {
  return (
    <>
      <div className={classes.inputBox}>
        <label className={classes.label} htmlFor={name}>
          {label}:
        </label>
        <input
          placeholder={placeholder}
          className={classes.input}
          id={name}
          name={name}
          type={type}
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className={classes.error}>{formik.errors[name]}</div>
      )}
    </>
  );
};

export default Input;
