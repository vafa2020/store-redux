import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./pages/home/Homepage";
import Cart from "./pages/cart/Cart";
import Productpage from "./pages/productPage/Productpage";
import Aboutus from "./pages/about-us/Aboutus";
import Blogs from "./pages/blogs/Blogs";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/login/Login";
import Signin from "./pages/singin/Signin";


const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#4f46e5",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#5B21B6",
    },
  },
});

function App() {
  return (
    <div dir="rtl" className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="courses" element={<Productpage />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
