import React from "react";
import "./frontEndTech.css";
import html5Logo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import jsLogo from "../../images/javaScript.png";
import reactLogo from "../../images/react.png";

const logos = [
  {
    src: html5Logo,
    alt: "HTML5",
    className: "logo html-logo",
  },
  {
    src: cssLogo,
    alt: "CSS",
    className: "logo css-logo",
  },
  {
    src: jsLogo,
    alt: "JS",
    className: "logo js-logo",
  },
  {
    src: reactLogo,
    alt: "REACT",
    className: "logo react-logo",
  },
];

const FrontEndTech = () => (
  <div className="frontEndTech">
    <h2 className="frontEndHeader">Front End Technologies</h2>
    <div className="tech-container">
      <div className="tech-card">
        {/* <img src={html5Logo} alt="HTML5" className="logo" />
        <img src={cssLogo} alt="CSS" className="logo" />
        <img src={jsLogo} alt="JS" className="logo" />
        <img src={reactLogo} alt="REACT" className="logo" /> */}
        <LogoFormat />
      </div>
    </div>
  </div>
);

const LogoFormat = () => {
  return logos.map((logo) => (
    <img src={logo.src} alt={logo.alt} className={logo.className} />
  ));
};
export default FrontEndTech;
