import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./pages/home/Homepage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const theme = createTheme({
  direction: "rtl",
});

function App() {
  return (
    <Provider store={store}>
      <div dir="rtl" className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
