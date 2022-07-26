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

      <Container maxWidth="false" sx={{ marginTop: "10%" }}>
        <h1 className="head">
          <span>Welcome to my world</span>
        </h1>
        <h1 className="head">I'am Ausbel</h1>
        <TextList />
      </Container>
    </motion.div>
  );
}

export default Home;
