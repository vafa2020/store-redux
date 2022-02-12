import { Link } from "react-router-dom";
import classes from "./HeaderRight.module.scss";
import logo from "../../img/logo.svg";
import { Navigation } from "../navigation/Navigation";
import { NavigationMobile } from "../navigationMobile/NavigationMobile";

const HeaderRight = () => {
  return (
    <div className={classes.headerRight}>
      <NavigationMobile/>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="logo-icon" />
      </Link>
      <Navigation />
    </div>
  );
};

export default HeaderRight;

// export const SumMenu = ({ subMenu }) => {
//   return (
//     <div className={classes.subMenu}>
//       <ul className={classes.itemsSubMenu}>
//         <li className={classes.itemSubMenu}>
//           {subMenu?.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className={({ isActive }) =>
//                 `${classes.linkSubMenu} ${isActive ? classes.activated : ""}`
//               }
//             >
//               {item.title}
//             </NavLink>
//           ))}
//         </li>
//       </ul>
//     </div>
//   );
// };
