import { Link, NavLink } from "react-router-dom";
import classes from "./HeaderRight.module.scss";
import logo from "../../img/logo.svg";
const HeaderRight = () => {
  const Links = [
    { to: "/", title: "خانه" },
    { to: "/courses", title: "دوره های آموزشی" },
    { to: "/blogs", title: "بلاگ ها" },
    { to: "/about-us", title: "درباره ی ما" },
  ];
  return (
    <div className={classes.headerRight}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="logo-icon" />
      </Link>
      <nav>
        <ul className={classes.items}>
          {Links.map((item) => (
            <li className={classes.item}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${classes.link} ${isActive ? classes.activated : ""}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderRight;
