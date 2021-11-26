import HeaderLeft from "../headerLeft/HeaderLeft";
import HeaderRight from "../headerRight/HeaderRight";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderRight />
      <HeaderLeft />
    </header>
  );
};

export default Header;
