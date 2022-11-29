import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Page404 from "./pages/Page404";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Counter from "./pages/Counter";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CRUD from "./pages/CRUD";

//changing MUI default colors
const theme = createTheme({
  palette: {
    primary: { main: "#099292" }, //turquoise
    secondary: { main: "#b71cc8" }, //pink
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="crud" element={<CRUD />} />
          <Route path="counter" element={<Counter />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
export default App;
