import React, { useState, useEffect } from "react";
import "../App.css";
import ResponsiveAppBar from "./NavBar";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import { AnimatePresence } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const textAnimationConfig = {
  enter: (direction) => {
    return {
      y: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const textList = ["Full-Stack developer", "ML Engineer", "Physics Engineer"];

function TextList() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === textList.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.h2
        className="head"
        style={{ fontFamily: "Glegoo, serif", color: "white" }}
        key={index}
        variants={textAnimationConfig}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.5 },
        }}
      >
        {textList[index]}
      </motion.h2>
    </AnimatePresence>
  );
}

function Home() {
  return (
    <motion.div
      className="App"
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.5,
        staggerChildren: 0.1,
      }}
    >
      <ResponsiveAppBar />

      <Container maxWidth="lg" sx={{ marginTop: "5%" }}>
        <h1 className="head">
          <span>Welcome to my world!</span>
        </h1>
        <h1 className="head">I'am Λusbel</h1>
        <TextList />
      </Container>

      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
        <h1 className="about-header">ABOUT</h1>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#334756",
          }}
        ></div>
      </Container>

      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
        <h1 className="portfolio-header">PROJECTS</h1>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#334756",
          }}
        ></div>
      </Container>
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
        <h1 className="contact-header">CONTACT</h1>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#334756",
          }}
        ></div>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <footer
          style={{
            position: "relative",
            fontFamily: "Kanit, sans-serif",
            color: "#2C394B",
            textAlign: "center",
          }}
        >
          ©Ausbel 2022
        </footer>
      </Container>
    </motion.div>
  );
}

export default Home;
