import classes from "./MainMiddle.module.scss";
import Partical from "../../img/practical.svg";
import Refund from "../../img/refund.svg";
import Mentor from "../../img/mentor.svg";
import Quality from "../../img/quality.svg";
import Time from "../../img/time.svg";
import Svgbox from "../svgBox/Svgbox";
const Mainmiddle = () => {
  return (
    <div className={classes.mainMiddle}>
      <Svgbox
        src={Partical}
        title={"کاربردی و پروژه محور"}
        paragraph={"با کار روی پروژه واقعی، بازار رو از نزدیک لمس کنید"}
      />
      <Svgbox
        src={Time}
        title={"ویدئو های کوتاه و با کیفیت"}
        paragraph={"هر مبحث در قالب یک جلسه کوتاه و کاربردی آماده شده است"}
      />
      <Svgbox
        src={Mentor}
        title={"همراهی مربی"}
        paragraph={"با مربی‌های حرفه‌ای و با حوصله رفع اشکال می‌کنید"}
      />
      <Svgbox
        src={Quality}
        title={"تضمین کیفیت"}
        paragraph={
          "بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید"
        }
      />
      <Svgbox
        src={Refund}
        title={"تضمین بازگشت وجه"}
        paragraph={"اگه راضی نبودید تا ۱۵ روز فرصت دارید انصراف بدید"}
      />
    </div>
  );
};

export default Mainmiddle;
