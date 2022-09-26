import Skill from "./Skill";

import classes from "./SkillsStyle.module.css";

const CodingSkills = () => {
  return (
    <div className={classes["skills-container"]}>
      <h2 className={classes.title}>Coding Skills</h2>
      <div className={classes.skills}>
        <Skill skillName="HTML / CSS" percentage="100%" />
        <Skill skillName="PHP" percentage="90%" />
        <Skill skillName="JavaScript" percentage="90%" />
        <Skill skillName="Smarty / Twig" percentage="85%" />
      </div>
    </div>
  );
};

export default CodingSkills;
