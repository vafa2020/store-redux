import classes from "./Maintop.module.scss";
import Banner from "../../img/banner.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Maintop = () => {
  return (
    <div className={classes.mainTop}>
      <span>
        <img className={classes.banner} src={Banner} alt="banner" />
      </span>
      <div className={classes.textBanner}>
        <h1>دوره های آموزشی آکادمی فرانت هوکس</h1>
        <p>برنامه نویسی را سریع، آسان وپروژه محور یاد بگیرید</p>
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
