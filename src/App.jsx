// import "./App.css";
// import ResponsiveAppBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Start from "./components/Start";
import React, { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
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
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
