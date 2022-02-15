import React from "react";
import classes from "./NavLink.module.scss";
import { NavLink as Link } from "react-router-dom";
const Links = [
  { to: "/", title: "خانه" },
  {
    to: "/courses",
    title: "دوره های آموزشی",
  },
  { to: "/blogs", title: "بلاگ ها" },
  {
    to: "/about-us",
    title: "درباره ی ما",
  },
];
export const NavLink = () => {
  return (
    <ul className={classes.items}>
      {Links.map((item) => (
        <li key={item.to} className={classes.item}>
          <Link
            to={item.to}
            className={({ isActive }) =>
              `${classes.link} ${isActive ? classes.activated : ""}`
            }
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
