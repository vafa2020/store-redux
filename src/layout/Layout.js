import Footer from "../component/footer/Footer";
import Header from "../component/Header/Header";
import classes from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
