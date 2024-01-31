import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SCSS",
  "GİT",
  "Linux",
];

const SkillCards = () => (
  <div className="skillCardsContainer">
    <h3 className="skillHeader">SKILLS</h3>
    <div className="skillCards">
      <ul className="skillLists">
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
