import { motion } from "framer-motion";
import React from "react";
import "./aboutme.scss";
import ProfilePic from '../../assets/Rajesh_krishna_profile.jpg'
const Letter = ({ letter, duration, delay, className }) => (
  <motion.mark
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration,
      delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className={className}
  >
    {letter}
  </motion.mark>
);

const AboutMe = ({ contact }) => {
  return (
    <div className="about">
      <div className="left">
        <h1 data-scroll data-scroll-speed="0.2" className="welcome">
          <span className="welcome-text">
            <Letter
              letter="w"
              duration={0.1}
              delay={0.1}
              className="welcome-text"
            />
            <Letter
              letter="e"
              duration={0.2}
              delay={0.2}
              className="welcome-text"
            />
            <Letter
              letter="l"
              duration={0.3}
              delay={0.3}
              className="welcome-text"
            />
            <Letter
              letter="c"
              duration={0.4}
              delay={0.4}
              className="welcome-text"
            />
            <Letter
              letter="o"
              duration={0.5}
              delay={0.5}
              className="welcome-text"
            />
            <Letter
              letter="m"
              duration={0.6}
              delay={0.6}
              className="welcome-text"
            />
            <Letter
              letter="e"
              duration={0.7}
              delay={0.7}
              className="welcome-text"
            />
            <Letter
              letter=" "
              duration={0.7}
              delay={0.7}
              className="welcome-text"
            />
            <Letter
              letter="t"
              duration={0.8}
              delay={0.8}
              className="welcome-text"
            />
            <Letter
              letter="o"
              duration={0.9}
              delay={0.9}
              className="welcome-text"
            />
            <Letter
              letter=" "
              duration={1}
              delay={1.0}
              className="welcome-text"
            />
            <br />
            <Letter
              letter="m"
              duration={1.1}
              delay={1.1}
              className="welcome-text"
            />
            <Letter
              letter="y"
              duration={1.2}
              delay={1.2}
              className="welcome-text"
            />
            <br />
          </span>
          <mark className="mark1">
            <Letter letter="w" duration={1.3} delay={1.3} className="mark1" />
            <Letter letter="o" duration={1.4} delay={1.4} className="mark1" />
            <Letter letter="r" duration={1.5} delay={1.5} className="mark1" />
            <Letter letter="k" duration={1.6} delay={1.6} className="mark1" />
            <Letter letter="p" duration={1.7} delay={1.7} className="mark1" />
            <Letter letter="l" duration={1.8} delay={1.8} className="mark1" />
            <Letter letter="a" duration={1.9} delay={1.9} className="mark1" />
            <Letter letter="c" duration={2} delay={2.0} className="mark1" />
            <Letter letter="e" duration={2.1} delay={2.1} className="mark1" />
          </mark>
          <Letter letter="." duration={2.2} delay={2.2} className="mark2" />
        </h1>
        <a onClick={() => contact.current.scrollIntoView({ behavior: "smooth" })} class="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
          Get In Touch
        </a>
      </div>
      <div data-scroll data-scroll-speed="0.4" className="right">
        <div className="container">
          <img
            data-scroll
            data-scroll-speed="0.1"
            className="laptop"
            src={ProfilePic}
            alt="a laptop"
            fetchpriority="high"
          />
        </div>
        <div className="desc">
          <span>Rajesh Krishna.</span> 
          <br />
          A passionate software developer with over <span>2.5 years of professional experience</span>, 
          specializing in building responsive and scalable web applications using <span>React,
          Node.js, and MongoDB</span>. Proven track record in optimizing performance, enhancing user engagement, 
          and delivering high-quality code through Agile methodologies.
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
