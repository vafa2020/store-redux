import React from "react";
import { NavLinks } from "../navLinks/NavLinks";
import classes from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
};
