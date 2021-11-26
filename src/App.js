import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./pages/home/Homepage";


const theme = createTheme({
  direction: "rtl",
});

function App() {
  return (
    <div dir="rtl" className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
