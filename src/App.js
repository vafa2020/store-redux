import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./pages/home/Homepage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./pages/cart/Cart";
import Productpage from "./pages/productPage/Productpage";
import Aboutus from "./pages/about-us/Aboutus";
import Blogs from "./pages/blogs/Blogs";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/login/Login";
import Signup from "./pages/singUp/Signup";

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
    <Provider store={store}>
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
            <Route path="signup" element={<Signup />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
