import React from "react";
import "./Start.css";
import Typewriter from "typewriter-effect";
import StartButton from "./StartButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Start() {
  return (
    // <motion.div
    //   variants={animationConfiguration}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    // >
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
      {/* <div className="loading"> */}
      <Typewriter
        options={{
          strings: ["< > Ausbel Dev < / >"],
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
      {/* </div> */}
    </motion.div>
    // </motion.div>
  );
}

export default Start;
