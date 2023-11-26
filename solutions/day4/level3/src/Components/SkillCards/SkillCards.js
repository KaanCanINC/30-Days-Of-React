import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "SCSS", "GİT", "Linux"];

const SkillCards = () => (
  <div className="skillsContainer">
    <div className="skillsHeaderSection">
      <h3 className="skillsHeader">SKILLS</h3>
    </div>
    <div className="skillsSection">
      <ul className="skillsList">
        <SkillsMap />
      </ul>
    </div>
  </div>
);

const SkillsMap = () => {
  return skills.map((skill, index) => (
    <li key={index} className={`skillCard ${skill[index]}`}>
      {skill}
    </li>
  ));
};

export default SkillCards;
