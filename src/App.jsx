import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router basename="/personal-website">
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
