import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Start from "./components/Start";
import React, { useState, useEffect } from "react";

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
        <Start handleStart={handleStart} />
      ) : (
        <div className="App">
          <ResponsiveAppBar />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
