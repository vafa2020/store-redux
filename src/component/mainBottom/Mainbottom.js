import classes from "./Mainbottom.module.scss";
import Intro from "../../img/frontend-intro.png";
import { Link } from "react-router-dom";
const Mainbottom = () => {
  return (
    <div className={classes.Mainbottom}>
      <div>
        <img className={classes.banner} src={Intro} alt="Intro" />
      </div>
      <div className={classes.textBanner}>
        <p style={{ fontWeight: "bold", margin: 0 }}>
          فرانت اند (Front-End) چیه؟{" "}
        </p>
        <p>
          بذار خیلی خودمونی و به دور از تعاریف کلیشه ای بهت بگم که فرانت اند
          (front-end) چیه ؟ کیه و چیکار میکنه ؟ هر وبسایت و یا اپلیکیشنی دو بخش
          اساسی داره. یکی سمت سرور که کاربر نمیبینه و یکی سمت کاربر که میشه همون
          ظاهر سایت. دقیقا درست حدس زدی به چیزایی که ما مستقیما باهاش کار میکنیم
          و میبینم میگن فرانت سایت. مثل هدر، فوتر، بخش اصلی محتوای سایت، فرم های
          ثبت نام و.. که پیاده کردن همه اینا به عهده توسعه دهنده فرانت
          (front-end developer) هست. با اومدن فریمورک های جذاب جاوااسکریپت مثل
          vue.js و کتابخونه ریکت (react.js) وظیفه فرانت خیلی سنگین تر شده و خیلی
          از کارا که قبلا توسط توسعه دهنده بک اند (back-end developer) انجام
          میشد، الان دیگه فرانت اند کارا انجام میدن و همین دلیل باعث شده بازار
          استخدامی فرانت اند خیلی داغ بشه و حقوق فرانت اند هم خیلی بیشتر شده و
          همه دنبال افراد متخصص توی این حوزه هستند. بهت تبریک میگم به دنیای پر
          رمز و راز و جذاب برنامه نویسی وب و مخصوصا فرانت، خوش اومدی. از تجربه
          ما استفاده کن و تا لحظه ورود به بازار کار با نهایت افتخار کنارتیم.
        </p>
        <p>
          <strong> میخوایی بیش تر بدونی؟ </strong>
          تو
          <strong>
            <Link to="https://www.aparat.com/v/M8NmW/">
              وبینار رایگان ورود به دنیای برنامه نویسی وب
            </Link>
          </strong>
          شرکت کن
        </p>
      </div>
    </div>
  );
};

export default Mainbottom;
