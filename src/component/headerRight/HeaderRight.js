import { Link, NavLink } from "react-router-dom";
import classes from "./HeaderRight.module.scss";
import logo from "../../img/logo.svg";

const HeaderRight = () => {
  const Links = [
    { to: "/", title: "خانه" },
    {
      to: "/courses",
      title: "دوره های آموزشی",
      subMenu: [
        { to: "/react", title: "ریکت" },
        { to: "/javaScript", title: "جاوااسکریپت" },
        { to: "/angular", title: "انگولار" },
      ],
    },
    { to: "/blogs", title: "بلاگ ها" },
    {
      to: "/about-us",
      title: "درباره ی ما",
      subMenu: [
        { to: "/telegram", title: "تلگرام" },
        { to: "/instagram", title: "اینستاگرام" },
      ],
    },
  ];
  return (
    <div className={classes.headerRight}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="logo-icon" />
      </Link>
      <nav>
        <ul className={classes.items}>
          {Links.map((item) => (
            <li key={item.to} className={classes.item}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${classes.link} ${isActive ? classes.activated : ""}`
                }
              >
                {item.title}
                <SumMenu subMenu={item.subMenu}/>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderRight;


export const SumMenu = ({ subMenu }) => {
  return (
    <div className={classes.subMenu}>
      <ul className={classes.itemsSubMenu}>
        <li className={classes.itemSubMenu}>
          {subMenu?.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${classes.linkSubMenu} ${isActive ? classes.activated : ""}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </li>
      </ul>
    </div>
  );
};