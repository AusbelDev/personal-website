import React, { useState, useEffect } from "react";
import "../App.css";
import ResponsiveAppBar from "./NavBar";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import { AnimatePresence } from "framer-motion";
import img from "./20201201_133703.jpg";
import Glitch from "./Glitch";
import Form from "./Form";
import Fade from "react-reveal/Fade";
import Card from "./Card";
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
  SiNumpy,
  SiDocker,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// service_n18gngk

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
  "My name is Marcos 'Ausbel' Hernandez. I am 28 years old and i live in Guanajuato, Mexico. I'm a physics engineer and a self-taught developer and machine learning engineer.",
  "I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.",
  "Technology is my passion, and software development has been my main focus for many years, specifically applied machine learning, but i have shifted my focus to a full-stack development, for which i have generated a great passion for.",
  "Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something I use for many hours daily. It allows me to have everything exactly as I desire.  ",
  "Below you can find some of the technologies I have been working with recently, as my certifications and skills.",
];

const projects = [
  {
    title: "Real Time Traffic Signs Detection",
    description:
      "A real time traffic signs detection system using deep learning.",
    image:
      "https://www.grufoos.com/IMG/iconos/senal-transito-reglamentarias.jpg",
    status: "In Progress",
  },
  {
    title: "Neural Network from Scratch using Numpy",
    description: "A neural network from scratch using Numpy.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/RNN_Tutorial.jpg",
    status: "Finished",
  },
  {
    title: "Smoke Detection on Laparoscopic Surgery using Deep Learning",
    description: "A smoke detection system using deep learning.",
    image:
      "https://www.boehringerlabs.com/wp-content/uploads/2021/01/GSNOR0817_006a_89676_600.jpg",
    status: "Finished",
  },
  {
    title:
      "Real-Time Embedded RGB-D SLAM using CNN's for depth estimation and feature extraction",
    description:
      "A real-time embedded RGB-D SLAM system using CNN's for depth estimation and feature extraction.",
    image:
      "https://www.researchgate.net/profile/Sven-Behnke-2/publication/327093298/figure/fig15/AS:667215703592961@1536088028889/Sparse-feature-based-3D-Reconstruction-of-KITTI-00-by-ORB-SLAM-The-top-view-shows-an.ppm",
    status: "Finished",
  },
  {
    title:
      "Deep Learningn implementation on an autonomous vehicle for strawberry production estimation",
    description:
      "A deep learning implementation on an autonomous vehicle for strawberry production estimation.",
    image: "/rover.jpg",
    status: "Finished",
  },
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

      <Container
        id="About Me"
        maxWidth="xl"
        sx={{ display: "block", alignItems: "center" }}
      >
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
            <Fade left cascade duration={2000} key={index}>
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
                <p
                  style={{
                    width: "100%",
                  }}
                >
                  {text}
                </p>
              </div>
            </Fade>
          ))}
          <Fade right duration={2000}>
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
                  boxShadow: "0 25px 25px rgba(0, 0, 0, 0.6)",
                }}
              />
            </div>
          </Fade>

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
            <Fade right duration={3000}>
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
            </Fade>
            <Fade left duration={3000}>
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
            </Fade>
            <Fade right duration={3000}>
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
            </Fade>
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
              <Fade left cascade duration={3000}>
                <SiJavascript title="JavaScript" />
                <FaNode title="Node.js" />
                <SiExpress title="express.js" />
                <SiReact title="React.js" />
                <SiHtml5 title="HTML" />
                <SiCss3 title="CSS" />
                <SiDocker title="Docker" />
              </Fade>
              <Fade right cascade duration={3000}>
                <SiVisualstudiocode title="VSCode" />
                <SiLinux title="Linux" />
                <SiGit title="Git" />
                <SiMongodb title="MongoDB" />
                <SiRos title="ROS" />
                <SiTensorflow title="TensorFlow" />
                <SiNumpy title="Numpy" />
              </Fade>
            </div>
          </Container>
        </div>
      </Container>

      <Container
        id="Projects"
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
          <h1 className="portfolio-header">PROJECTS</h1>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#334756",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            // alignItems: "center",
            gap: "1vh",
            marginBottom: "3vh",
          }}
        >
          {projects.map((project, index) => (
            <Fade bottom duration={3000} key={index}>
              <Card project={project} key={index} />
            </Fade>
          ))}
        </div>
      </Container>
      <Container
        id="Contact Me"
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
          <div
            style={{
              display: "flex",
              // flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "2vh",
                  fontFamily: "Kanit, sans-serif",
                  color: "#ede6e6",
                  width: "100%",
                }}
              >
                Do not hesitate to contact me through this form, my social
                networks or by direct email on ausbel.dev@gmail.com.
              </p>
            </div>
            <Form />
          </div>
          <div
            style={{
              fontSize: "5vh",
              textAlign: "center",
              color: "#d4cdcd",
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
                color: "#d4cdcd",
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
                color: "#d4cdcd",
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
                color: "#d4cdcd",
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
                color: "#d4cdcd",
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
