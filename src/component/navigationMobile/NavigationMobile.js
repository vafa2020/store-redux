import React, { useState } from "react";
import classes from "./NavigationMobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLinks } from "../navLinks/NavLinks";
export const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const showMenu = (
    <GiHamburgerMenu
      className={classes.hamberger}
      onClick={() => setOpenMenu(!openMenu)}
      size="30px"
    />
  );
  const closeMenu = (
    <AiOutlineCloseCircle
      className={classes.hamberger}
      onClick={() => setOpenMenu(!openMenu)}
      size="30px"
    />
  );
  const closeMobileNavigation = () => setOpenMenu(false);
  return (
    <nav className={classes.navigationMobile}>
      {openMenu ? closeMenu : showMenu}
      {openMenu && <NavLinks isMobile={true} closeMobileNavigation={closeMobileNavigation} />}
    </nav>
  );
};
