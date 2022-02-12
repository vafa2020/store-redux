import React from "react";
import { NavLink } from "../navLink/NavLink";
import classes from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavLink />
    </nav>
  );
};
