import classes from "./Maintop.module.scss";
import Banner from "../../img/banner.png";
import { Button } from "@mui/material";

const Maintop = () => {
  return (
    <div className={classes.mainTop}>
      <div className={classes.boxImageBanner}>
        <img className={classes.banner} src={Banner} alt="banner" />
      </div>
      <div className={classes.textBanner}>
        <h1 className={classes.title}>دوره های آموزشی آکادمی فرانت هوکس</h1>
        <p className={classes.subTitle}>
          برنامه نویسی را سریع، آسان وپروژه محور یاد بگیرید
        </p>
        <Button
          href="#course"
          size="large"
          variant="contained"
          color="secondary"
        >
          مشاهده دوره ها
        </Button>
      </div>
    </div>
  );
};

export default Maintop;
