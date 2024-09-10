import React from "react";
import "./Experience.scss";
import { forwardRef } from "react";
import react from "../../assets/React.svg";
import HTML5 from "../../assets/HTML5.svg";
import BitBucket from "../../assets/BitBucket.svg";
import BrowserStack from "../../assets/BrowserStack.svg";
import CSS3 from "../../assets/CSS3.svg";
import Drupal from "../../assets/Drupal.svg";
import JavaScript from "../../assets/JavaScript.svg";
import TypeScript from "../../assets/TypeScript.svg";
import Analytics from "../../assets/analytics.png";
const Experience = forwardRef((props, ref) => {
  return (
    <div className="experience">
      <div className="heading" ref={ref}>
        Experience
      </div>
      <div className="role">
        Frontend Engineer -&nbsp;{" "}
        <a href="//www.athenahealth.com" target="_blank" className="company">
          {" "}
          Athenahealth
        </a>
      </div>
      <div className="experience_section">
        <div className="techstack">
          <img src={react}></img>
          <img src={HTML5}></img>
          <img src={BitBucket}></img>
          <img src={BrowserStack}></img>
          <img src={CSS3}></img>
          <img src={Drupal}></img>
          <img src={JavaScript}></img>
          <img src={TypeScript}></img>
          <img src={Analytics}></img>
        </div>
        <ul>
          <li>
            Contributed to a highly scalable React marketing web application
            with server-side rendering using Drupal CMS, enhancing user
            experience and elevating overall customer satisfaction.
          </li>
          <li>
            Enhanced forms using Formik, improving the submission process and
            aligning with industry standards.
          </li>
          <li>
            Architected and implemented RESTful APIs for form submission and
            content moderation, significantly improving system scalability and
            content quality.
          </li>
          <li>
            Led a complete navigation revamp, resulting in increased interaction
            and streamlined user journeys.
          </li>
          <li>
            Developed and integrated 10+ reusable React components within Drupal
            CMS, optimizing the development process and ensuring design
            consistency.
          </li>
          <li>
            Improved application performance by optimizing image formats,
            managing state, implementing lazy loading, code splitting, and
            addressing cumulative layout shift, resulting in a more responsive
            and efficient user interface.
          </li>
          <li>
            Executed event tracking with Adobe Analytics and customized Adobe
            Target activities, enhancing data capture and improving user
            interaction with banners and CTAs.
          </li>
          <li>
            Specialized in responsive UI design, cross-browser compatibility,
            and collaboration with Figma, transforming design frames into
            functional components.
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Experience;
