import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Start from "./components/Start";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [loading, setLoading] = useState(true);

  function handleStart() {
    setLoading(false);
  }

  useEffect(() => {
    setLoading(loading);
    console.log(loading);
  }, [loading]);

  return (
    <ThemeProvider theme={darkTheme}>
      {loading ? (
        <AnimatePresence exitBeforeEnter>
          <Start handleStart={handleStart} />
        </AnimatePresence>
      ) : (
        <div className="App">
          <ResponsiveAppBar />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
