import React, { useState, useEffect } from "react";
import "../App.css";
import ResponsiveAppBar from "./NavBar";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import { AnimatePresence } from "framer-motion";
import img from "./20201201_133703.jpg";
import Glitch from "./Glitch";
import Form from "./Form";

import {
  SiJavascript,
  SiExpress,
  SiReact,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
  SiLinux,
  SiGit,
  SiMongodb,
  SiRos,
  SiTensorflow,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGithub,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

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
          opacity: { duration: 0.5 },
          y: { type: "spring", stiffness: 300, damping: 200 },
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
                width: "100%",
                margin: "0%",
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

          <Container
            className="certifications-sec"
            style={{
              gridArea: "certifications",
              textAlign: "center",
              marginBottom: "2vh",
            }}
          >
            <div
              style={{
                textAlign: "left",
                color: "#334756",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "Glegoo, serif",
                }}
              >
                Certifications
              </h3>
              <div
                style={{
                  marginLeft: "1%",
                  width: "100%",
                  border: "none",
                  borderTop: "1px solid #334756",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://coursera.org/share/f2defc96f73643c516ba518abb244732"
              >
                <img
                  style={{
                    height: "auto",
                    maxWidth: "25vh",
                  }}
                  src="https://images.credly.com/size/680x680/images/efbdc0d6-b46e-4e3c-8cf8-2314d8a5b971/GCC_badge_python_1000x1000.png"
                  alt="IT Certificate"
                />
              </a>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Google IT Automation Professional Certificate</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Python for Everybody Specialization</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://coursera.org/share/238d41db684bf0e75cd13ce3b0793764"
              >
                <img
                  style={{
                    height: "auto",
                    maxWidth: "23vh",
                  }}
                  src="https://www.cursosgis.com/wp-content/uploads/0-11.png"
                  alt="Python Certification"
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://coursera.org/share/68727b579b022ffac8be7248490a20b4"
              >
                <img
                  style={{
                    height: "auto",
                    maxWidth: "25vh",
                  }}
                  src="https://gisgeography.com/wp-content/uploads/2022/01/DeepLearningAI-300x300.png"
                  alt="DL Certification"
                />
              </a>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Deep Learning Specialization</p>
              </div>
            </div>
          </Container>

          <Container
            maxWidth="false"
            style={{
              gridArea: "skills",
              fontSize: "5vh",
              textAlign: "center",
              marginBottom: "7vh",
            }}
          >
            <div
              style={{
                textAlign: "left",
                color: "#334756",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                marginBottom: "5vh",
              }}
            >
              <h3
                style={{
                  fontFamily: "Glegoo, serif",
                  fontSize: "2.5vh",
                  marginLeft: "10%",
                }}
              >
                Skills
              </h3>
              <div
                style={{
                  marginLeft: "1%",
                  width: "100%",
                  border: "none",
                  borderTop: "1px solid #334756",
                  marginRight: "10%",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1vh",
              }}
            >
              <SiJavascript title="JavaScript" />
              <FaNode title="Node.js" />
              <SiExpress title="express.js" />
              <SiReact title="React.js" />
              <SiHtml5 title="HTML" />
              <SiCss3 title="CSS" />
              <SiVisualstudiocode title="VSCode" />
              <SiLinux title="Linux" />
              <SiGit title="Git" />
              <SiMongodb title="MongoDB" />
              <SiRos title="ROS" />
              <SiTensorflow title="TensorFlow" />
            </div>
          </Container>
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
      <Container
        maxWidth="xl"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: "3vh",
          }}
        >
          <h1 className="contact-header">CONTACT</h1>
          <span
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#334756",
            }}
          ></span>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form />
          <div
            style={{
              fontSize: "5vh",
              textAlign: "center",
              color: "white",
              display: "inherit",
              flexDirection: "row",
              width: "70%",
              justifyContent: "space-evenly",
              marginTop: "7vh",
            }}
          >
            <a
              href="https://www.linkedin.com/in/marcos-rrh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
              }}
            >
              <span>
                <SiLinkedin title="LinkedIn" />
              </span>
            </a>
            <a
              href="https://github.com/AusbelDev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
              }}
            >
              <span>
                <SiGithub title="GitHub" />
              </span>
            </a>
            <a
              href="https://instagram.com/ausbeldev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
              }}
            >
              <span>
                <SiInstagram title="Instagram" />
              </span>
            </a>
            <a
              href="https://twitter.com/AusbelDev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
              }}
            >
              <span>
                <SiTwitter title="Twitter" />
              </span>
            </a>
          </div>
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
            marginTop: "3vh",
            marginBottom: "5vh",
          }}
        >
          ©Ausbel 2022
        </footer>
      </Container>
    </motion.div>
  );
}

export default Home;
