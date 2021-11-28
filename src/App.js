import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./pages/home/Homepage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./pages/cart/Cart";

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
            <Route path="cart" element={<Cart />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
