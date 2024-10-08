import React from "react";
import { useEffect, useRef, useState } from "react";
import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import ImageSlider from './imageSlider/ImageSlider.jsx';

import Search from '../../assets/search.png'
import Menu from '../../assets/Menu.png'
import order from '../../assets/order.png'
import track from '../../assets/track.png'
import payment from '../../assets/payment.png'
import homepage from '../../assets/homepage.webp'
import review from '../../assets/review.png'
import project1 from '../../assets/ReactflowPlayground.png'
import { forwardRef } from "react";

const images=[homepage, Search, Menu, order, payment, track, review]
const Projects = forwardRef((props, ref) => {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const toggleProjects = () => {
      setShowMoreProjects(!showMoreProjects);
    };

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((project, index) => {
        const projectTop = project.offsetTop;
        const imageTop = imageRefs.current[index].offsetTop;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > projectTop + 100) {
          project.classList.add("appear");
        }

        if (scrollTop + windowHeight > imageTop + 100) {
          imageRefs.current[index].classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="projects">
      <h1 ref={ref} className="project_title">
        My Projects
      </h1>
      <div className="mobile">
        <div className="projectstop p1">
          <div className="project" ref={(el) => (projectRefs.current[0] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 React.js</div>
                <div className="one">02 zustand</div>
                <div className="two">03 Python </div>
                <div className="three">04 SCSS</div>
              </div>
              <LaptopRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p rev">
              ReactFlow playground
            </h1>

            <div className="description">
            This project demonstrates a playground for building interactive node-based graphs using React Flow. It provides a starting point to create custom nodes, edges, and integrate additional functionalities like managing state, handling API calls, and more.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://github.com/rajeshkrishnait/ReactflowPlayground/"
                target="_blank"
              >
                <GitHubIcon />
                Source
              </a>
              <a
                className="demo"
                href="https://rajeshkrishnait.github.io/ReactflowPlayground/"
                target="_blank"
              >
                <PublicIcon />
                Live URL
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[0] = el)}>
            <img
              loading="lazy"
              src={project1}
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[1] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 Javascript</div>
                <div className="one">02 css</div>
                <div className="two">03 Ajax</div>
                <div className="two">04 mysql</div>
              </div>
              {/* <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              /> */}
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
              BeServed.
            </h1>
            <div className="description">
            This project is designed as an Online Catering Integration Platform, aimed at simplifying and streamlining the catering service process. It allows users to explore catering services, view menu options, and place orders seamlessly through an intuitive interface.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://github.com/rajeshkrishnait/Online-Catering-Integration-Platform/tree/master/bcpro2"
                target="_blank"
              >
                <GitHubIcon />
                Source
              </a>
             
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[1] = el)}>
            <ImageSlider images={images}/>
          </div>
        </div>
        {/* {showMoreProjects && (
          <>
            <div className="projectstop">
              <div
                className="project appear"
                ref={(el) => (projectRefs.current[4] = el)}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="techstack">
                    <div className="zero">01 HTML5</div>
                    <div className="one">02 CSS</div>
                    <div className="two">03 JavaScript</div>
                    <div className="three">04 PHP</div>
                  </div>
                  <DevicesRoundedIcon
                    style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
                  />
                </div>
                <h1 data-scroll data-scroll-speed="0.02" className="title_p">
                  Prints.
                </h1>
                <div className="description">
                  Oh, this one's just a landing page. It doesn't really do much
                  apart from showcasing my frontend and design skills. The page
                  is about buying and selling your digital art and customizing
                  it as wall posters.
                </div>
                <br />
                <div className="links">
                  <a
                    className="source"
                    href="https://github.com/Mithesh-B/prints"
                    target="_blank"
                  >
                    <GitHubIcon />
                    Source
                  </a>
                  <a
                    className="demo"
                    href="https://mithesh-b.github.io/prints/"
                    target="_blank"
                  >
                    <PublicIcon />
                    Live link
                  </a>
                </div>
              </div>
              <div
                className="image appear"
                ref={(el) => (imageRefs.current[4] = el)}
              >
                <img
                  loading="lazy"
                  src="../project5.webp"
                  alt="project img"
                  fetchpriority="low"
                />
              </div>
            </div>
            <div className="projectstop">
              <div
                className="project appear"
                ref={(el) => (projectRefs.current[5] = el)}
              >
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className="techstack">
                    <div className="zero">01 React.js</div>
                    <div className="one">02 Next.js</div>
                    <div className="two">03 SCSS</div>
                    <div className="two">04 Chart.js</div>
                  </div>
                  <LaptopRoundedIcon
                    style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
                  />
                </div>
                <h1 data-scroll data-scroll-speed="0.02" className="title_p">
                  Board.
                </h1>
                <div className="description">
                  Board is a modern and user-friendly desktop dashboard
                  application built with React and Next.js. It uses interactive
                  line and pie charts to display dummy data. The dashboard
                  fetches data from an API.
                </div>
                <br />
                <div className="links">
                  <a
                    className="source"
                    href="https://github.com/Mithesh-B/Board"
                    target="_blank"
                  >
                    <GitHubIcon />
                    Source
                  </a>
                  <a
                    className="demo"
                    href="https://board-ochre.vercel.app/"
                    target="_blank"
                  >
                    <PublicIcon />
                    Live link
                  </a>
                </div>
              </div>
              <div
                className="image appear"
                ref={(el) => (imageRefs.current[5] = el)}
              >
                <img
                  loading="lazy"
                  src="../project4.webp"
                  alt="project img"
                  fetchpriority="low"
                />
              </div>
            </div>
          </>
        )} */}
        {/* <div className="btn-container">
          <div className="btn-content">
            <div onClick={toggleProjects} className="show-more">
              {showMoreProjects ? "View less" : "View more"}
            </div>
            {showMoreProjects ? (
              <KeyboardArrowUpRoundedIcon
                onClick={toggleProjects}
                className="icon"
                
              />
            ) : (
              <KeyboardArrowDownRoundedIcon
                className="icon"
                onClick={toggleProjects}
                
              />
            )}
          </div>
        </div> */}
      </div>
    </div>
    // <div className="projects">
    //  <h1 ref={ref} className="project_title">
    //     Work In Progress...
    //  </h1>
    // </div>
  );
});

export default Projects;
