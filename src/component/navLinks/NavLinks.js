import React from "react";
import classes from "./NavLinks.module.scss";
import { NavLink } from "react-router-dom";
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
export const NavLinks = ({ isMobile, closeMobileNavigation }) => {
  return (
    <ul className={classes.items}>
      {Links.map((item) => (
        <li
          key={item.to}
          className={classes.item}
          onClick={() => isMobile && closeMobileNavigation()}
        >
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
  );
};
