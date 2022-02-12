import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
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
export const Navigation = () => {
  return (
    <nav className={classes.nav}>
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
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
