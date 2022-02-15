import React, { useState } from "react";
import classes from "./NavigationMobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "../navLink/NavLink";
export const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={classes.navigationMobile}>
       <button
        onClick={() => setOpenMenu(!openMenu)}
        className={classes.hambergerMenu}
      >
        {openMenu ? (
          <AiOutlineCloseCircle size="large" />
        ) : (
          <GiHamburgerMenu size="large" />
        )}
      </button>
    <nav className={classes.nav}>
      {openMenu && <NavLink />}
    </nav>
    </div>
  );
};
