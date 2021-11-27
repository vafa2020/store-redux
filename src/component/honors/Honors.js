import classes from "./Honors.module.scss";
const Honors = () => {
  return (
    <div className={classes.honors}>
      <div className={classes.honorsTitle}>
        <h2>آمار ها باعث افتخار ما هستند.</h2>
        <p>آخرین به روز رسانی :مرداد 1400 </p>
      </div>
      <div className={classes.expreience}>
        <div>
          <h2>4+</h2>
          <h3>سال سابقه ی فعالیت حرفه ای</h3>
        </div>
        <div>
          <h2>500+</h2>
          <h3>دانشجوی خصوصی و آنلاین</h3>
        </div>
        <div>
          <h2>95%+</h2>
          <h3>رضایت از آموزش</h3>
        </div>
      </div>
    </div>
  );
};

export default Honors;
