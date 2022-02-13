import React, { useState } from "react";
import classes from "./NavigationMobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "../navLink/NavLink";
export const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
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
    <nav className={classes.navigationMobile}>
      {openMenu && <NavLink />}
    </nav>
    </>
  );
};
