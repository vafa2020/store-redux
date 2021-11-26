import HeaderLeft from "../headerLeft/HeaderLeft";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <HeaderLeft />
      <div className={classes.boxRight}></div>
    </header>
  );
};

export default Navigation;
