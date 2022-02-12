import React, { useState } from "react";
import { Navigation } from "../navigation/Navigation";
import classes from "./NavigationMobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
export const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className={classes.hambergerMenu}
      >
        <GiHamburgerMenu size="large" />
      </button>
      {openMenu && <Navigation />}
    </>
  );
};
