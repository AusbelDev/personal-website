import React, { useState, useEffect } from "react";
import "../App.css";
import ResponsiveAppBar from "./NavBar";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import { AnimatePresence } from "framer-motion";
import img from "./20201201_133703.jpg";
import Glitch from "./Glitch";

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

const textList = ["Full-Stack Dev", "ML Engineer", "Physics Engineer"];
const aboutText = [
  "My name is Oliver Cederborg. I am 25 years old, I live in Copenhagen, Denmark, and I'm a self-taught designer and developer.",
  "Digital design has been my main focus for many years, specifically UI/UX, but I have the past years shifted my focus to frontend development, which I have developed a great passion for.",
  "I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.",
  "  Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something I use for many hours daily. It allows me to have it exactly as I desire. For instance, I use Neovim as my editor of choice, I have built multiple custom mechanical keyboards, and I use Colemak DHk as my keyboard layout. ",
];

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
        style={{ fontFamily: "Glegoo, serif", color: "white", fontSize: "7vh" }}
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

      <Container
        maxWidth="xl"
        sx={{
          marginTop: "17vw",
          marginBottom: "17vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "auto" }}>
          <h1 className="head-span">Welcome to my world!</h1>
          <h1 className="head">I'am Λusbel</h1>
          <TextList />
        </div>
        <Glitch />
      </Container>

      <Container maxWidth="xl" sx={{ display: "block", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <h1 className="about-header">ABOUT</h1>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#334756",
            }}
          ></div>
        </div>
        <div className="about-grid">
          {aboutText.map((text, index) => (
            <div
              key={index}
              style={{
                width: "90%",
                margin: "1%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                gridArea: `text${index + 1}`,
              }}
            >
              <p>{text}</p>
            </div>
          ))}

          <div
            style={{
              gridArea: `img`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={img}
              alt="img"
              style={{
                height: "auto",
                width: "auto",
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "20%",
              }}
            />
          </div>
        </div>
      </Container>

      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <h1 className="portfolio-header">PROJECTS</h1>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#334756",
            }}
          ></div>
        </div>
      </Container>
      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <h1 className="contact-header">CONTACT</h1>
          <span
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#334756",
            }}
          ></span>
        </div>
      </Container>

      <Container
        maxWidth="xl"
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
