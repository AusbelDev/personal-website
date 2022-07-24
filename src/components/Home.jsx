import React from "react";
import "../App.css";
import ResponsiveAppBar from "./NavBar";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

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
    </motion.div>
  );
}

export default Home;
