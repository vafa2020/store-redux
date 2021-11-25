import Footer from "../component/footer/Footer";
import Navigation from "../component/navigation/Navigation";


const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
