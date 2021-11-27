import Footerright from "../footerRight/Footerright";
import classes from "./Footer.module.scss";
import ZarinPall from "../../img/zarin-pall.svg";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Footerright />
      <div>
        <img src={ZarinPall} alt="zarin" />
      </div>
    </footer>
  );
};

export default Footer;
