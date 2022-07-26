import React, { useCallback } from "react";
import "./Start.css";
import Typewriter from "typewriter-effect";
import StartButton from "./StartButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

const animationConfiguration = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Start() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <motion.div
      className="Start css-selector"
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
      <Particles options={particlesOptions} init={particlesInit} />
      <Typewriter
        options={{
          strings: ["< > Ausbel Dev < >"],
          autoStart: true,
          loop: true,
          wrapperClassName: "loading",
          cursor: "_",
          cursorClassName: "cursor",
        }}
      />
      <br />
      <br />
      <Link to="/home">
        <StartButton />
      </Link>
      <footer
        style={{
          top: "40%",
          position: "relative",
          fontFamily: "Ubuntu, monospace",
          color: "#2C394B",
        }}
      >
        ©Ausbel 2022
      </footer>
    </motion.div>
  );
}

export default Start;
