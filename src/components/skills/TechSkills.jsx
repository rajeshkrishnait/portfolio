import React from "react";
import "./techskills.scss";
import { forwardRef } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SwipeLeftAltRoundedIcon from "@mui/icons-material/SwipeLeftAltRounded";
import SwipeRightAltRoundedIcon from "@mui/icons-material/SwipeRightAltRounded";

import react from "../../assets/React.svg";
import HTML5 from "../../assets/HTML5.svg";
import node from "../../assets/node-js.svg";
import BrowserStack from "../../assets/BrowserStack.svg";
import CSS3 from "../../assets/CSS3.svg";
import Drupal from "../../assets/Drupal.svg";
import JavaScript from "../../assets/JavaScript.svg";
import TypeScript from "../../assets/TypeScript.svg";
import Analytics from "../../assets/analytics.png";

import { Tooltip } from 'react-tooltip'


const TechSkills = forwardRef((props, ref) => {
  return (
    <div className="hover">
      <div className="title2" ref={ref}>
        Technical Skills
      </div>

      <div className="tech">
        <div data-scroll data-scroll-speed="0.15" className="grid grid1">
         <img  data-tooltip-id="my-tooltip"
          data-tooltip-content="HTML5"
          data-tooltip-place="top" src={HTML5}/>
         <Tooltip id="my-tooltip" />
        </div>
        <div className="grid grid1">
          <div className="skill-title">
           
          </div>
          <img data-tooltip-id="my-tooltip"
          data-tooltip-content="javascript"
          data-tooltip-place="top" src={JavaScript}/>
        </div>
        <div className="grid grid1">
          <img data-tooltip-id="my-tooltip"
          data-tooltip-content="ReactJs"
          data-tooltip-place="top" src={react}/>
        </div>

        <div data-scroll data-scroll-speed="0.15" className="grid grid1">
          <img data-tooltip-id="my-tooltip"
          data-tooltip-content="CSS3"
          data-tooltip-place="top" src={CSS3}/>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="grid grid1">
          
          <img data-tooltip-id="my-tooltip"
          data-tooltip-content="Typescript"
          data-tooltip-place="top" src={TypeScript}/>
        </div>
        <div className="grid grid1">
         
          <img data-tooltip-id="my-tooltip"
          data-tooltip-content="NodeJs"
          data-tooltip-place="top" src={node}/>
        </div>
        <div className="grid grid1">
          
          <img data-tooltip-id="my-tooltip"
          data-tooltip-content="Adobe Analytics"
          data-tooltip-place="top"src={Analytics}/>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="grid grid1">
                <img data-tooltip-id="my-tooltip"
          data-tooltip-content="Drupal"
          data-tooltip-place="top" src={Drupal}/>
        </div>
      </div>
      <div className="mobilescroll" style={{ textAlign: "center" }}>
        {" "}
        <SwipeLeftAltRoundedIcon
          style={{ color: "#e2e2e2c2", fontSize: "1.8rem" }}
        />
        <p style={{ fontSize: "0.6rem", fontWeight: "500" }}>SCROLLABLE</p>
        <SwipeRightAltRoundedIcon
          style={{ color: "#e2e2e2c2", fontSize: "1.8rem" }}
        />
      </div>
    </div>
  );
});

export default TechSkills;
