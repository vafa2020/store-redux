import Footer from "../component/footer/Footer";
import Header from "../component/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
